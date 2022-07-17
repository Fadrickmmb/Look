const fs = require("fs").promises;
const puppeteer = require("puppeteer"); // ^14.3.0

const vmzPaths = [
  '//*[@id="__layout"]/div/div[1]/section/div/div/div[2]/div[2]/div[1]/div/div/div[2]/div/div[1]/span[2]',
  '//*[@id="__layout"]/div/div[1]/section/div/div/div[2]/div[2]/div[1]/div/div/div[2]/div/div[1]/span[4]/b',
];

const mbPaths = [
  "/html/body/section[3]/div/div/div[2]/div[1]/div/div[2]/div/a/div[2]/span",
  "/html/body/section[3]/div/div/div[2]/div[1]/div/div[2]/div/div/a/div/div/strong[2]",
];

const decoPaths = [
    '//*[@id="bodyID"]/div[2]/div/div[2]/div/div/div/div[3]/div[3]/ticket-price-box/div/div/span[1]/div/span[2]/span/span',
];

const vpPaths = [
    '/html/body/div[8]/div/div[1]/div[2]/div[1]/div[4]/div/div/div[2]/div/div/div[1]/div[6]',
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
    scrape(browser, "https://www.ingressosmagicblue.com.br/produtos/?mpage=2", mbPaths),
    scrape(browser, "https://www.vmzviagens.com.br/ingressos/orlando/walt-disney-orlando", vmzPaths),
    scrape(browser, "https://www.decolar.com/atracoes-turisticas/d-DY_ORL/ingressos+para+walt+disney+world+resort-orlando?from=nav", decoPaths),
    scrape(browser, "https://www.voupra.com/estados-unidos/orlando/disney-world?gclid=CjwKCAjwquWVBhBrEiwAt1KmwozkmSdvlsz2lW49QRF1gcondnMLugN9GTVCh8MhQA4Z4pQIh4HKpxoCP5gQAvD_BwE", vpPaths),
  ]);
  const names = ["MB", "VMZ", "DECO", "VP"];
  const collected = Object.fromEntries(text.map((e, i) => [
    names[i], Object.fromEntries(e.map((e, i) =>
      [`preco${i === 0 ? "" : (i + 1)}`, e]
    ))
  ]));
  collected.horario = new Date();
  await fs.writeFile("Scraped-Disney.json", JSON.stringify(collected, null, 2));
})()
  .catch(err => console.error(err))
  .finally(() => browser?.close())
;