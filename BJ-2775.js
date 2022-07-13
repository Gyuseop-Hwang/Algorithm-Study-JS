const input = require("fs").readFileSync("input.txt").toString().trim().split("\n").map(Number);

function numerical(k, n) {
    let bottomTotal = Array.from({ length: n }, (_, i) => i + 1);
    for (let i = 0; i < k; i++) {
        for (let j = 1; j < n; j++) {
            bottomTotal[j] = bottomTotal[j - 1] + bottomTotal[j];
        }
    }
    return bottomTotal[n - 1];
}


let repeat = input[0];
let arr = input.slice(1);
for (let i = 0; i < repeat; i++) {
    let k = arr[2 * i];
    let n = arr[2 * i + 1];
    console.log(numerical(k, n));
}
