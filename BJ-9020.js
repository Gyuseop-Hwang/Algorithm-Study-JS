const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

const input = [];

rl.on("line", function (line) {
    if (!line) rl.close();
    else {
        input.push(Number(line));
    }
}).on("close", function () {
    let test = input[0];
    let isPrime = true;
    let primes;
    let a;
    let b;
    for (let i = 1; i <= test; i++) {
        a = 0;
        b = 0;
        primes = [];
        let even = input[i];
        for (let j = 2; j < even; j++) {
            for (let k = 2; k <= Math.floor(Math.sqrt(j)); k++) {
                if (j % k === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) primes.push(j);
            isPrime = true;
        }
        let ref;
        let start = 0;
        while (true) {
            ref = primes.indexOf(even - primes[start]);
            if (ref > -1) {
                a = primes[start];
                b = primes[ref];
            }
            start++;
            if (primes[start] > even / 2) break;
        }
        console.log(a, b);
    }
    process.exit;
})