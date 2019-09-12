/* const johnScoreOne = 89;
const johnScoreTwo = 120;
const johnScoreThree = 103;

const mikeScoreOne = 116;
const mikeScoreTwo = 94;
const mikeScoreThree = 123;
 */
const johnTotal = 89 + 120 + 103;
const mikeTotal = 116 + 94 + 123;

let johnAverage = (johnTotal) / 3;
let mikeAverage = (mikeTotal) / 3;

if (johnAverage > mikeAverage) {
    console.log("John's team is superior in average.");
}
else if (mikeAverage > johnAverage) {
    console.log("Mike's team is superior in average.");
}
else if (mikeAverage === johnAverage) {
    console.log("Both teams are equally superior in average.");
}
else {
    console.log("Houston, we have a problem with this code.");
}