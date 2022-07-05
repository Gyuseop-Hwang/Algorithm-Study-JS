const input = require("fs").readFileSync("input.txt").toString().trim();

let dial = {
    'ABC': 3,
    'DEF': 4,
    'GHI': 5,
    'JKL': 6,
    'MNO': 7,
    'PQRS': 8,
    'TUV': 9,
    'WXYZ': 10
}
let total = 0;
for (let i = 0; i < input.length; i++) {
    for (let key in dial) {
        if (key.includes(input[i])) total += dial[key];
    }
}
console.log(total);