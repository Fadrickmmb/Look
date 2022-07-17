const puppeteer = require('puppeteer');
const fs = require('fs');


/**//**//**//**//**//**//**//**//**///**/   DECOLAR SCRAPING    /*//*/*/*/*/*/*/*/*/8*/*/*/*/*/* */ */ */ */ */ */ */ */ */ */ */ */



async function scrapeDecolar(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [decoel] = await page.$x('//*[@id="bodyID"]/div[2]/div/div[2]/div/div/div/div[3]/div[3]/ticket-price-box/div/div/span[1]/div/span[2]/span/span');
    const decoTxt = await decoel.getProperty('textContent');
    const decoRawTxt = await decoTxt.jsonValue();

    console.log({decoRawTxt});
    const deco01 = JSON.stringify(decoRawTxt);
    console.log(deco01);

    /*fs.writeFile("Scraped-DECO01.json", 'Decolar à vista:' + JSON.stringify(decoRawTxt), err => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("-*-*-*DECO01 Scraping Successful-*-*-*");
    });*/

    browser.close();
}
scrapeDecolar('https://www.decolar.com/atracoes-turisticas/d-DY_ORL/ingressos+para+walt+disney+world+resort-orlando?from=nav');




/**//**//**//**//**//**//**//**//**///**/   VMZ SCRAPING    /*//*/*/*/*/*/*/*/*/*/*/*/*/*/* */ */ */ */ */ */ */ */ */ */ */ */

async function scrapeVMZ(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [vmzel1] = await page.$x('//*[@id="__layout"]/div/div[1]/section/div/div/div[2]/div[2]/div[1]/div/div/div[2]/div/div[1]/span[2]');
    const vmztxt1 = await vmzel1.getProperty('textContent');
    const vmzRawTxt1 = await vmztxt1.jsonValue();


    const [vmzel2] = await page.$x('//*[@id="__layout"]/div/div[1]/section/div/div/div[2]/div[2]/div[1]/div/div/div[2]/div/div[1]/span[4]/b');
    const vmztxt2 = await vmzel2.getProperty('textContent');
    const vmzRawTxt2 = await vmztxt2.jsonValue();

    console.log({vmzRawTxt1, vmzRawTxt2});
    const vmz01 = JSON.stringify(vmzRawTxt1);
    const vmz02 = JSON.stringify(vmzRawTxt2);
    console.log(vmz01, vmz02);

    
    let abc = {
        "horario": new Date(),
        "MB": {
            preco: vmz01,
            maxParcelas: 10
        },
        "Decolar": {
            preco: 677.42,
            maxParcelas: 10
        },
        "VMZ": {
            preco: 677.42,
            maxParcelas: 10
        }
    };

    fs.writeFile("Scraped-Prices.json", JSON.stringify(abc, null, 2), err => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("-*-*-*VMZ01 Scraping Successful-*-*-*");
    });
/*
    fs.writeFile("Scraped-VMZ02.json", 'VMZ parcelado: 10x de ' + JSON.stringify(vmzRawTxt2), err => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("-*-*-*VMZ02 Scraping Successful-*-*-*");
    });  */ 
        
    browser.close();
}
scrapeVMZ('https://www.vmzviagens.com.br/ingressos/orlando/walt-disney-orlando');



/**//**//**//**//**//**//**//**//**///**/   MAGIC BLUE SCRAPING    /*//*/*/*/*/*/*/*/*/8*/*/*/*/*/* */ */ */ */ */ */ */ */ */ */ */ */

async function scrapeMB(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    
    const [mbel1] = await page.$x('/html/body/section[3]/div/div/div[2]/div[1]/div/div[2]/a[1]/span[2]/span/div/div[2]/span');
    const mbtxt1 = await mbel1.getProperty('textContent');
    const mbRawTxt1 = await mbtxt1.jsonValue();


    
    const [mbel2] = await page.$x('/html/body/section[3]/div/div/div[2]/div[1]/div/div[2]/a[1]/span[2]/span/div/div[4]/span');
    const mbtxt2 = await mbel2.getProperty('textContent');
    const mbRawTxt2 = await mbtxt2.jsonValue();

    console.log({mbRawTxt1, mbRawTxt2});
    const mb01 = JSON.stringify(mbRawTxt1);
    const mb02 = JSON.stringify(mbRawTxt2);
    console.log(mb01, mb02);

   /* fs.writeFile("Scraped-MB01.json", 'MB à vista:  ' + JSON.stringify(mbRawTxt1), err => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("-*-*-*MB01 Scraping Successful-*-*-*");
    });

    fs.writeFile("Scraped-MB02.json", 'MB parcelado 10x de: ' + JSON.stringify(mbRawTxt2), err => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("-*-*-*MB02 Scraping Successful-*-*-*");
    });   */ 
   
    browser.close();
}
scrapeMB('https://www.ingressosmagicblue.com.br/produtos/?mpage=2');




/**//**//**//**//**//**//**//**//**///**/   VOU PRA SCRAPING    /*//*/*/*/*/*/*/*/*/8*/*/*/*/*/* */ */ */ */ */ */ */ */ */ */ */ */



async function scrapeVP(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    
    const [vpel1] = await page.$x('/html/body/div[8]/div/div[1]/div[2]/div[1]/div[4]/div/div/div[2]/div/div/div[1]/div[6]');
    const vptxt1 = await vpel1.getProperty('textContent');
    const vpRawTxt1 = await vptxt1.jsonValue();


    
    const [vpel2] = await page.$x('/html/body/div[8]/div/div[1]/div[2]/div[1]/div[4]/div/div/div[2]/div/div/div[1]/div[4]');
    const vptxt2 = await vpel2.getProperty('textContent');
    const vpRawTxt2 = await vptxt2.jsonValue();


    console.log({vpRawTxt1, vpRawTxt2});
    const vp01 = JSON.stringify(vpRawTxt1);
    const vp02 = JSON.stringify(vpRawTxt2);
    console.log(vp01, vp02);
   
    browser.close();
}
scrapeVP('https://www.voupra.com/estados-unidos/orlando/disney-world?gclid=CjwKCAjwquWVBhBrEiwAt1KmwozkmSdvlsz2lW49QRF1gcondnMLugN9GTVCh8MhQA4Z4pQIh4HKpxoCP5gQAvD_BwE');



/**//**//**//**//**//**//**//**//**///**/   VAMO NESSA SCRAPING    /*//*/*/*/*/*/*/*/*/8*/*/*/*/*/* */ */ */ */ */ */ */ */ */ */ */ */

/*
async function scrapeVN(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    
    const [vnel1] = await page.$x('//*[@id="root"]/div[2]/div[1]/div[5]/div[2]/div[1]/div[2]/div[2]/div[2]/div[1]/p[4]');
    const vntxt1 = await vnel1.getProperty('textContent');
    const vnRawTxt1 = await vntxt1.jsonValue();


    
    const [vnel2] = await page.$x('//*[@id="root"]/div[2]/div[1]/div[5]/div[2]/div[1]/div[2]/div[2]/div[2]/div[1]/p[6]');
    const vntxt2 = await vnel2.getProperty('textContent');
    const vnRawTxt2 = await vntxt2.jsonValue();

    console.log({vnRawTxt1, vnRawTxt2});
    const vn01 = JSON.stringify(vnRawTxt1);
    const vn02 = JSON.stringify(vnRawTxt2);
    console.log(vn01, vn02);

    fs.writeFile("VN01.json", 'VN à vista:  ' + JSON.stringify(vnRawTxt1), err => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("-*-*-*VN01 Scraping Successful-*-*-*");
    });

    fs.writeFile("VN02.json", 'MB parcelado 10x de: ' + JSON.stringify(vnRawTxt2), err => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("-*-*-*VN02 Scraping Successful-*-*-*");
    });    
   
    browser.close();
}
scrapeVN('https://www.vamonessa.com.br/ingressos/WALT%20DISNEY%20WORLD/6?destination=Orlando&destinationCode=2&destinationState=Florida&destinationStateCode=2&date=2022-09-15&utm_source=Destaque-Advert&utm_medium=Ingressos+Disney+15-03-2022&utm_campaign=Ingressos+para+Disney&utm_id=Walt+Disney+World');
*/


/**//**//**//**//**//**//**//**//**///**/   WRITING JSON FILE    /*//*/*/*/*/*/*/*/*/8*/*/*/*/*/* */ */ */ */ */ */ */ */ */ */ */ */

/*
let abc = {
    "horario": new Date(),

    "MB": {
        preco: 100,
        maxParcelas: 10
    },
    "Decolar": {
        preco: 100,
        maxParcelas: 10
    },
    "VMZ": {
        preco: vmz01,
        maxParcelas: 10
    }
};

fs.writeFile("Scraped-Prices.json", JSON.stringify(abc, null, 2), err => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("-*-*-*Scraping Successful-*-*-*");
    });
*/

