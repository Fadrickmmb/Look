const fs = require("fs").promises;
const puppeteer = require("puppeteer"); // ^14.3.0

const vmzUnPaths = [
  '//*[@id="__layout"]/div/div[1]/section/div/div/div[2]/div[2]/div[7]/div/div/div[2]/div/div[1]/span[2]',
  '//*[@id="__layout"]/div/div[1]/section/div/div/div[2]/div[2]/div[7]/div/div/div[2]/div/div[1]/span[4]/b',
];

const mbUnPaths = [
  "/html/body/section[3]/div/div/div[2]/div[2]/div/div[2]/div/a/div[2]/span",
  "/html/body/section[3]/div/div/div[2]/div[2]/div/div[2]/div/div/a/div/div/strong[2]",
];

const decoUnPaths = [
    '/html/body/app-root/detail/div/div/div[3]/detail-pricebox-sticky/pricebox-sticky/div/div[1]/div[1]/div[3]/div/text()',
];

const vpUnPaths = [
    '/html/body/div[8]/div/div[1]/div[2]/div[1]/div[4]/div/div/div[2]/div/div/div[1]/div[2]',
    '/html/body/div[8]/div/div[1]/div[2]/div[1]/div[4]/div/div/div[2]/div/div/div[1]/div[4]',
];


const scrape = async (browser, url, paths) => {
  const page = await browser.newPage();
  await page.goto(url);
  return Promise.all(paths.map(async p =>
    (await page.waitForXPath(p)).evaluate(e => e.textContent)
  ));
};

let browser;
(async () => {
  browser = await puppeteer.launch({headless: true});
  const text = await Promise.all([
    scrape(browser, "https://www.ingressosmagicblue.com.br/ingressos-universal-flexivel/", mbUnPaths),
    scrape(browser, "https://www.vmzviagens.com.br/ingressos/orlando/universal-studios", vmzUnPaths),
    scrape(browser, "https://www.decolar.com/atracoes-turisticas/d-UN_ORL/ingressos+para+universal+orlando+resort-orlando?clickedPrice=1558&priceDate=1680704021024&clickedCurrency=BRL&distribution=1", decoUnPaths),
    scrape(browser, "https://www.voupra.com/estados-unidos/orlando/universal-orlando", vpUnPaths),
  ]);
  const names = ["MB-UN", "VMZ-UN", "DECO-UN", "VP-UN"];
  const collected = Object.fromEntries(text.map((e, i) => [
    names[i], Object.fromEntries(e.map((e, i) =>
      [`preco${i === 0 ? "" : (i + 1)}`, e]
    ))
  ]));
  collected.horario = new Date();
  await fs.writeFile("Scraped-Universal.json", JSON.stringify(collected, null, 2));
})()
  .catch(err => console.error(err))
  .finally(() => browser?.close())
;