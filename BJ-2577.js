const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
const input = [];
rl.on("line", function (line) {
    if (!line) rl.close();
    else input.push(parseInt(line));
}).on("close", function () {
    let answer = '';
    let sample = '0123456789';
    let fc = {};
    for (let i = 0; i < sample.length; i++) {
        fc[sample[i]] = 0;
    }
    let result = input.reduce((pre, cur) => { return pre * cur; }, 1);
    result = result.toString();
    for (let i = 0; i < result.length; i++) {
        fc[result[i]]++;
    }
    let results = Object.values(fc);
    for (let i = 0; i < results.length; i++) {
        answer += results[i] + '\n';
    }
    console.log(answer);
    process.exit;
})