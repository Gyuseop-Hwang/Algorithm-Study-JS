const input = require("fs").readFileSync("./input.txt").toString().trim().split(" ").map(Number);
let M = input[0];
let N = input[1];
let primes = '';
let isPrime = true;
for (let i = M; i <= N; i++) {
    if (i === 1) continue;
    for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) primes += i + '\n';
    isPrime = true;
}

console.log(primes);
