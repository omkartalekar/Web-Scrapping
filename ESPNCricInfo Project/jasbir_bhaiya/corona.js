const request = require("request");
const cheerio=require("cheerio");
const chalk=require("chalk");
request("http://www.worldometers.info/coronavirus/",cb);

function cb(err, response,html) {

    if(err){
        console.error('error:', error); 
    }
    else{
        extractHTML(html)
    }
};

function extractHTML(html){
    let selectorTool=cheerio.load(html);
    // let h1s=selectorTool("h1");
    let contentArr=selectorTool("#maincounter-wrap span");
    // for(let i=0;i<contentArr.length;i++){
    //     let data=selectorTool(contentArr[i]).text();
    //     console.log("data: ",data);
    // }

    let total=selectorTool(contentArr[0]).text();
    let death=selectorTool(contentArr[1]).text();
    let recovered=selectorTool(contentArr[2]).text();
    console.log(chalk.yellow("Total cases:",total));
    console.log(chalk.red("Death: ",death));
    console.log(chalk.green("recoverd ",recovered));
    // console.log(h1s.length);

}