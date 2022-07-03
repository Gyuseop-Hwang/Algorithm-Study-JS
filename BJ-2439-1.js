const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

let input;
rl.on("line", function (line) {
    input = parseInt(line);
    rl.close();
}).on("close", function () {
    for (let i = 0; i < input; i++) {
        let star = '';
        for (let j = input - 1; j >= 0; j--) {
            star += j <= i ? '*' : ' '
        }
        console.log(star);
    }
    process.exit;
})