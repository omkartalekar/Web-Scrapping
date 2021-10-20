// const cheerio = require("cheerio");
// const request = require("request");

// request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/live-cricket-score", requestCallback);

// function requestCallback(err, res, html) {
//     const $ = cheerio.load(html);
//     const losingTeam = $(".team-gray .name-link p").text();
//     // console.log(losingTeam);

//     const bothTeamsObj = $(".name-link p");
//     const bothTeamScoreObj = $("match-info.match-info-MATCH.match-info-MATCH-half-width .score");
//     const winningTeamNameScoreArray = $(bothTeamsObj[0]).text() == losingTeam ? [$(bothTeamsObj[1]).text(),
//     $(bothTeamScoreObj[0]).text()] : [$(bothTeamsObj[1]).text(), $(bothTeamScoreObj[0]).text()];
//     console.log(winningTeamNameScoreArray);
// }

const cheerio = require("cheerio");
const request = require("request");

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/live-cricket-score", requestCallback);

function requestCallback(err, res, html) {
    const $ = cheerio.load(html);
    const losingTeam = $(".team-gray .name-link p").text();
    // console.log(losingTeam);

    const bothTeamsObj = $(".name-link p");
    const bothTeamScoreObj = $(".match-info.match-info-MATCH.match-info-MATCH-half-width .score");
    const winningTeamNameScoreArray = $(bothTeamsObj[0]).text()==losingTeam ? [$(bothTeamsObj[1]).text(),
    $(bothTeamScoreObj[1]).text()] : [$(bothTeamsObj[1]).text(),$(bothTeamScoreObj[1]).text()];
    console.log(winningTeamNameScoreArray);
}
