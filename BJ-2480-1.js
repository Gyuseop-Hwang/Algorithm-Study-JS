const input = require("fs").readFileSync("./input.txt").toString().trim().split(" ").map(Number);
let num1 = input[0];
let num2 = input[1];
let num3 = input[2];
let award = 0;
switch (true) {
    case num1 === num2 && num2 === num3:
        award = 10000 + 1000 * num1;
        break;
    case num1 === num2:
        award = 1000 + num1 * 100;
        break;
    case num2 === num3:
        award = 1000 + num2 * 100;
        break;
    case num1 === num3:
        award = 1000 + num1 * 100;
        break;
    default:
        award = Math.max(num1, num2, num3) * 100;
        break;
}
console.log(award);