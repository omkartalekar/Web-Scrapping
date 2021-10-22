const request=require("request");
const cheerio=require("cheerio");
const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";
request(url,cb);
function cb(err,response,html){
    if(err){
        console.error("error");
    }
    else{
        extractHTML(html);
    }
}
// console.log("After");

function extractHTML(html){
    let $=cheerio.load(html);
    let eleArr=$(".d-flex.match-comment-padder.align-items-center .match-comment-wrapper .match-comment-long-text p");
    // let text=$(eleArr[0]).text();
    // let htmlData=$(eleArr[0]).html();

    console.log("text Data: ",text);
    console.log("html Data: ",htmlData);
}