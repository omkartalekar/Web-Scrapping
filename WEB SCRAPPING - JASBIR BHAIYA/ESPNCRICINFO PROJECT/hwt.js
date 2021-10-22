const request=require("request");
const cheerio=require("cheerio");
const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";

request(url,cb);

function cb(err,response,html){
    if(err){
        console.log("err");
    }
    else{
        extractHTML(html)
    }
}

function extractHTML(html){
    let $=cheerio.load(html);
    // full page search

    let inningsArr=$(".card.content-block.match-scorecard-table .Collapsible");
    for(let i=0;i<inningsArr.length;i++){
        let teamNameElem=$(inningsArr[i]).find(".header-title.label");
        let teamName=teamNameElem.text();
        console.log(teamName);
        teamName=teamName.split("INNINGS")[0];
        teamName=teamName.trim();

        let tableElem=$(inningsArr[i]).find(".table.batsman");
        let allBowlers=$(tableElem).find("tr");
        for(let j=0;j<allBowlers.length;j++){
            allColsPlayer=$(allBowlers[j]).find("td");
            let playerName=$(allColsPlayer[0]).text();
            console.log(playerName);
        }
    }

}