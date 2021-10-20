const cheerio=require("cheerio");
const request=require("request");
// const fs=require("fs");

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard",requestCallBack);

function requestCallBack(err,res,html){
    // console.log(html);
    // fs.writeFileSync("temp.html",JSON.stringify(html));
    const $=cheerio.load(html);
    console.log($(".playerofthematch-name").length);
    console.log($($(".playerofthematch-name")[0]).text());
    console.log($($(".playerofthematch-name")[1]).text());
    console.log($($(".playerofthematch-player-detail")[1]).html());
    console.log($($(".playerofthematch-player-detail")[1]).attr("class"));
    console.log($($(".playerofthematch-name")[1]).get(0).attribs);
}



