const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

const input = [];

rl.on("line", function (line) {
    if (!line) rl.close();
    else input.push(line.trim());
}).on("close", function () {
    let test = Number(input[0]);
    for (let i = 1; i <= test; i++) {
        let eachTest = input[i].split(" ").map(Number);
        let h = eachTest[0];
        let n = eachTest[2];
        let x;
        let y;
        if (n % h === 0) {
            x = n / h;
            y = h;
        } else {
            x = Math.floor(n / h) + 1;
            y = n % h;
        }
        if (x < 10) x = '0' + String(x);
        console.log(String(y) + String(x));
    }
})