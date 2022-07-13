const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
let input;
rl.on("line", function (line) {
    input = line.trim().split(" ");
    rl.close();
}).on("close", function () {
    let numA = input[0].split("").reverse().join("");
    let numB = input[1].split("").reverse().join("");
    let adderArr = [0];
    let idx = 0;
    let digitAdder;
    while (numA.length > idx && numB.length > idx) {
        digitAdder = Number(numA[idx]) + Number(numB[idx]) + adderArr[idx];
        if (digitAdder >= 10) {
            adderArr[idx] = digitAdder - 10;
            adderArr[idx + 1] = 1;
        } else {
            adderArr[idx] = digitAdder;
            adderArr[idx + 1] = 0;
        }
        idx++;
    }
    while (numA.length > idx) {
        digitAdder = Number(numA[idx]) + adderArr[idx];
        if (digitAdder >= 10) {
            adderArr[idx] = digitAdder - 10;
            adderArr[idx + 1] = 1;
        } else {
            adderArr[idx] = digitAdder;
            adderArr[idx + 1] = 0;
        }
        idx++;
    }
    while (numB.length > idx) {
        digitAdder = Number(numB[idx]) + adderArr[idx];
        if (digitAdder >= 10) {
            adderArr[idx] = digitAdder - 10;
            adderArr[idx + 1] = 1;
        } else {
            adderArr[idx] = digitAdder;
            adderArr[idx + 1] = 0;
        }
        idx++;
    }
    adderArr = adderArr.reverse();
    if (adderArr[0] === 0) adderArr.shift();
    adderArr = adderArr.join("");
    console.log(adderArr);
    process.exit;
})