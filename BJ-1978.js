const input = require("fs").readFileSync("./input.txt").toString().trim().split("\n");
let testCase = Number(input[0]);
let testArr = input[1].split(" ").map(Number);
let counter = testCase;
let num;

for (let i = 0; i < testCase; i++) {
    num = testArr[i];
    if (num === 1) {
        counter--;
        continue;
    }
    for (let j = 2; j <= Math.floor(Math.sqrt(num)); j++) {
        if (num % j === 0) {
            counter--;
            break;
        }
    }
}

console.log(counter);