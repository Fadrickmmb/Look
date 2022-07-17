const fs = require("fs").promises;
const puppeteer = require("puppeteer"); // ^14.3.0


/**//**//**//**//**//**//**//**//**///**/   DECOLAR UNIVERSAL    /*//*/*/*/*/*/*/*/*/8*/*/*/*/*/* */ */ */ */ */ */ */ */ */ */ */ */

async function scrapeDecolar(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [decounel] = await page.$x('//*[@id="bodyID"]/div[2]/div/div[2]/div/div/div/div[3]/div[3]/ticket-price-box/div/div/span[2]/div/div/span/span');
    const decounTxt = await decounel.getProperty('textContent');
    const decounRawTxt = await decounTxt.jsonValue();

    console.log({decounRawTxt});
    const decoun01 = JSON.stringify(decounRawTxt);
    console.log(decoun01);

    browser.close();
}
scrapeDecolar('https://www.decolar.com/atracoes-turisticas/d-UN_ORL/ingressos+para+universal+orlando+resort-orlando?fixedDate=2022-06-28');





/**//**//**//**//**//**//**//**//**///**/   VMZ UNIVERSAL   /*//*/*/*/*/*/*/*/*/*/*/*/*/*/* */ */ */ */ */ */ */ */ */ */ */ */

async function scrapeVMZ(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [vmzunel1] = await page.$x('//*[@id="__layout"]/div/div[1]/section/div/div/div[2]/div[2]/div[2]/div/div/div[2]/div/div[1]/span[2]');
    const vmzuntxt1 = await vmzunel1.getProperty('textContent');
    const vmzunRawTxt1 = await vmzuntxt1.jsonValue();


    const [vmzunel2] = await page.$x('//*[@id="__layout"]/div/div[1]/section/div/div/div[2]/div[2]/div[2]/div/div/div[2]/div/div[1]/span[4]/b');
    const vmzuntxt2 = await vmzunel2.getProperty('textContent');
    const vmzunRawTxt2 = await vmzuntxt2.jsonValue();

    console.log({vmzunRawTxt1, vmzunRawTxt2});
    const vmzun01 = JSON.stringify(vmzunRawTxt1);
    const vmzun02 = JSON.stringify(vmzunRawTxt2);
    console.log(vmzun01, vmzun02);  
  
    browser.close();
}
scrapeVMZ('https://www.vmzviagens.com.br/ingressos/orlando/universal-studios');





/**//**//**//**//**//**//**//**//**///**/   MAGIC BLUE UNIVERSAL    /*//*/*/*/*/*/*/*/*/8*/*/*/*/*/* */ */ */ */ */ */ */ */ */ */ */ */

async function scrapeMB(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    
    const [mbunel1] = await page.$x('/html/body/section[3]/div/div/div[2]/div[2]/div/div[2]/a[1]/span[2]/span/div/div[2]/span');
    const mbuntxt1 = await mbunel1.getProperty('textContent');
    const mbunRawTxt1 = await mbuntxt1.jsonValue();


    
    const [mbunel2] = await page.$x('/html/body/section[3]/div/div/div[2]/div[2]/div/div[2]/a[1]/span[2]/span/div/div[4]/span');
    const mbuntxt2 = await mbunel2.getProperty('textContent');
    const mbunRawTxt2 = await mbuntxt2.jsonValue();

    console.log({mbunRawTxt1, mbunRawTxt2});
    const mbun01 = JSON.stringify(mbunRawTxt1);
    const mbun02 = JSON.stringify(mbunRawTxt2);
    console.log(mbun01, mbun02);   
   
    browser.close();
}
scrapeMB('https://www.ingressosmagicblue.com.br/ingressos-universal-flexivel/');





/**//**//**//**//**//**//**//**//**///**/   VOU PRA UNIVERSAL    /*//*/*/*/*/*/*/*/*/8*/*/*/*/*/* */ */ */ */ */ */ */ */ */ */ */ */



async function scrapeVP(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    
    const [vpunel1] = await page.$x('');
    const vpuntxt1 = await vpunel1.getProperty('textContent');
    const vpunRawTxt1 = await vpuntxt1.jsonValue();


    
    const [vpunel2] = await page.$x('');
    const vpuntxt2 = await vpunel2.getProperty('textContent');
    const vpunRawTxt2 = await vpuntxt2.jsonValue();


    console.log({vpunRawTxt1, vpunRawTxt2});
    const vpun01 = JSON.stringify(vpunRawTxt1);
    const vpun02 = JSON.stringify(vpunRawTxt2);
    console.log(vpun01, vpun02);
   
    browser.close();
}
scrapeVP('');