const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
let input = [];
rl.on("line", function (line) {
    if (!line) rl.close();
    else input.push(line);
}).on("close", function () {
    let timeTable = input[0].split(" ").map(Number);
    let spentTime = parseInt(input[1]);
    let time = timeTable[0] * 60 + timeTable[1] + spentTime;
    let hour = 0;
    let min = 0;
    if (time >= 24 * 60) {
        time -= 24 * 60;
        hour = Math.floor(time / 60);
        minute = time % 60;
    } else {
        hour = Math.floor(time / 60);
        minute = time % 60;
    }
    console.log(hour, minute);
    process.exit;
})