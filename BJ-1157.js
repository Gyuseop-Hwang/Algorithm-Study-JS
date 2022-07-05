const input = require("fs").readFileSync("./input.txt").toString().trim();

let english = input.toLowerCase();
let fc = {};

for (let i = 0; i < english.length; i++) {
    let alphabet = english[i];
    fc[alphabet] = (fc[alphabet] || 0) + 1;
}

let values = Object.entries(fc);
let max = Math.max(...Object.values(fc));
let result = values.filter((x) => {
    if (x[1] === max) return true;
})
if (result.length > 1) console.log('?');
else console.log(result[0][0].toUpperCase());
// let values = Object.values(fc);
// let max = Math.max(...values);
// let result = values.filter((x) => {
//     if (x === max) return true;
// }).length;
// if (result > 1) {
//     console.log('?');
// } else {
//     values = Object.entries(fc);
//     let answer = values.find((x) => {
//         if (x[1] === max) return true;
//     })
//     console.log(answer[0].toUpperCase());
// }
