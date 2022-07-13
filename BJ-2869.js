const input = require("fs").readFileSync("./input.txt").toString().trim().split(" ").map(Number);
let a = input[0];
let b = input[1];
let c = input[2];
let rest = c - a;
let i = 1;
let darkNoon = a - b;
if (rest % darkNoon === 0) i += rest / darkNoon;
else i += Math.floor(rest / darkNoon) + 1

console.log(i);