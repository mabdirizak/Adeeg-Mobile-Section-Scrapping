import puppeteer from 'puppeteer';
import fs from 'fs';

async function adeegMobileAndAcc() {
  const browser = await puppeteer.launch({
    headless: "new",
  });

  const page = await browser.newPage();
  await page.goto("https://adeeg.com/collections/mobiles-and-accessories");

  //await page.screenshot({ path: 'adeeg.png', fullpage: true});
  const adeegMobileAndAcc = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".collection .product"), (e) => ({
        productName: e.querySelector('.card-information .text').innerText,
        productImage: e.querySelector('.card-information a').href,
        price: e.querySelector('.card-information .card-price .price__last').innerText,

    })));
    console.log(adeegMobileAndAcc);
    //save data as a json file
    fs.writeFile("Adeeg_Mobile_section.json", JSON.stringify(adeegMobileAndAcc), (err)=>{
        if(err) return console.log(err)
        console.log("Data has been saved as a json file")
    })



    
  await browser.close();
}

export {adeegMobileAndAcc}
