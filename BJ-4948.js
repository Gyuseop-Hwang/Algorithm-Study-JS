const input = require("fs").readFileSync("./input.txt").toString().trim().split("\n").map(Number);
input.pop();
let test = input.length;
let isPrime = true;
let counter;
for (let i = 0; i < test; i++) {
    counter = 0;
    let M = input[i];
    let N = input[i] * 2;
    for (let j = M + 1; j <= N; j++) {
        for (let k = 2; k <= Math.floor(Math.sqrt(j)); k++) {
            if (j % k === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) counter++;
        isPrime = true;
    }
    console.log(counter);
}
