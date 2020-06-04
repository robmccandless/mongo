const cheerio = require("cheerio");
const axios = require("axios")

const scraper = () => {
    axios.get("https://techcrunch.com/startups/").then(res => {
        // Load res.data to cheerio for scraping
        const $ = cheerio.load(res.data)

        // Go and get object attributes and send them to Mongo.
        $(".post-block__content").each((index, article) => {
            console.log(article.childNodes[0].data.trim())
        })

        $(".post-block__title").children().each((index, article) => {
            console.log(article.childNodes[0].data.trim())
            console.log(article.childNodes[0].parent.attribs.href)
        })

        // Send the objects to mongo.
    });
}

module.exports.scraper = scraper;