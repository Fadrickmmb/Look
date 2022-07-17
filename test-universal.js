const fs = require("fs").promises;
const puppeteer = require("puppeteer"); // ^14.3.0
  
  const wdwPaths = [
      '//*[@id="price"]',     
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
      scrape(browser, "", wdwPaths),
    ]);
    const names = ["VP-UN"];
    const collected = Object.fromEntries(text.map((e, i) => [
      names[i], Object.fromEntries(e.map((e, i) =>
        [`preco${i === 0 ? "" : (i + 1)}`, e]
      ))
    ]));
    await fs.writeFile("Scraped-TEST.json", JSON.stringify(collected, null, 2));
  })()
    .catch(err => console.error(err))
    .finally(() => browser?.close())
  ;