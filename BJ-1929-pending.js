const input = require("fs").readFileSync("./input.txt").toString().trim().split(" ").map(Number);
let m = input[0];
let n = input[1];
let answer = '';
let prime;
let numbers = Array.from({ length: n + 1 }, () => true);
numbers[0] = false;
numbers[1] = false;
while (true) {
    prime = numbers.indexOf(true);
    if (prime < 0) break;
    if (prime >= m) answer += prime + '\n';
    numbers = numbers.map((x, i) => {
        if (x === false) return false;
        else if (i % prime === 0) return false;
        else return true;
    })
}
console.log(answer);
// let decimals = [];
// while (true) {
//     if (numbers.length === 0) break;
//     decimal = numbers[0];
//     decimals.push(decimal);
//     numbers = numbers.filter((x) => {
//         if (x % decimal === 0) return false;
//         else return true;
//     })
// }
// decimals = decimals.filter((x) => x >= m).join("\n");

// console.log(decimals);
// while (true) {
//     if (numbers.length === 0) break;
//     decimal = numbers[0];
//     numbers = numbers.filter((x) => {
//         if (x % decimal === 0) return false;
//         else return true;
//     })
//     if (decimal >= m) {
//         answer += decimal + '\n';
//     }
// }
// console.log(answer);