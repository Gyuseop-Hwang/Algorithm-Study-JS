const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
let input = [];
rl.on("line", function (line) {
    if (!line) rl.close();
    else {
        input.push(Number(line));
    }
}).on("close", function () {
    let M = input[0];
    let N = input[1];
    let counter = 0;
    let isPrime = true;
    let isFirst = true;
    let low;
    for (let i = M; i <= N; i++) {
        if (i === 1) continue;
        for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            counter += i;
            if (isFirst) {
                low = i;
                isFirst = false;
            }
        }
        isPrime = true;
    }
    if (isFirst) low = -1;
    if (counter !== 0) console.log(counter);
    console.log(low);
    process.exit;
})