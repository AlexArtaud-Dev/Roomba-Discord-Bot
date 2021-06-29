const { MESSAGES } = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const puppeteer = require('puppeteer');


module.exports.run = (client, message, args) => {
    message.delete();
    async function scrapeProduct(url) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);

        const [el] = await page.$x('//*[@id="landingImage"]');
        const src = await el.getProperty('src');
        const srcTxt = src.jsonValue();



        const [el2] = await page.$x('//*[@id="productTitle"]');
        const txt = await el2.getProperty('textContent');
        const title = txt.jsonValue();



        const [el3] = await page.$x('//*[@id="priceblock_ourprice"]');
        const txt2 = await el3.getProperty('textContent');
        const price = txt2.jsonValue();

        const [el4] = await page.$x('//*[@id="productDescription"]');
        const txt3 = await el4.getProperty('textContent');
        const Desc = txt3.jsonValue();


        // console.log({ title, price, Desc });
        var globalVariable = 'test';


        let titlePromise = title.then(value1 => {
            console.log(value1);
            return value1;
        });

        console.log("Promise :" + titlePromise);

        price.then((value2) => {
            console.log(value2);

        });

        Desc.then((value3) => {
            console.log(value3);

        });



        browser.close();
        /*
                const embed = new MessageEmbed()
                    .setTitle(title)
                    .setThumbnail(srcTxt)
                    .setDescription(Desc);

                message.channel.send(embed);
        */



    }



    scrapeProduct('https://www.amazon.fr/Beyerdynamic-770-Casque-audio-ohms-studio/dp/B0006NL5SM?pd_rd_w=k3jsj&pf_rd_p=31a670af-ffe3-486f-ac9f-0586223f3dfe&pf_rd_r=PSGYSRW504Z8CK1FVDDK&pd_rd_r=212356b6-a329-466b-bbac-94f2ff0ac4b0&pd_rd_wg=k5H8v');

};

module.exports.help = MESSAGES.COMMANDS.MISC.AMAZON;


/*
  async function scrapeProduct(url) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);

        const [el] = await page.$x('//*[@id="landingImage"]');
        const src = await el.getProperty('src');
        const srcTxt = src.jsonValue();

        const [el2] = await page.$x('//*[@id="productTitle"]');
        const txt = await el2.getProperty('textContent');
        const title = txt.jsonValue();

        const [el3] = await page.$x('//*[@id="priceblock_ourprice"]');
        const txt2 = await el3.getProperty('textContent');
        const price = txt2.jsonValue();

        console.log({ srcTxt, title, price });

        browser.close();

*/