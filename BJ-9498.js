const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
let input;
rl.on("line", function (line) {
    input = parseInt(line);
    rl.close();
}).on("close", function () {
    switch (true) {
        case input >= 90 && input <= 100:
            input = 'A';
            break;
        case input >= 80 && input <= 89:
            input = 'B';
            break;
        case input >= 70 && input <= 79:
            input = 'C';
            break;
        case input >= 60 && input <= 69:
            input = 'D';
            break;
        default:
            input = 'F';
            break;
    }
    console.log(input);
    process.exit;
})