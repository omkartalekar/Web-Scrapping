const request=require("request");
const cheerio=require("cheerio");

const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";

request(url,cb);
function cb(err,res,html){
    if(err){
        console.log(err);
    }
    else{
        extractHTML(html);
    }
}

function extractHTML(html){
    let selectorTool=cheerio.load(html);
    let lbcommentArr=selectorTool(
        ".match-comment-wrapper .match-comment-long-text");
    let lbc=selectorTool(lbcommentArr[0]).text();
    console.log(lbc);
}

