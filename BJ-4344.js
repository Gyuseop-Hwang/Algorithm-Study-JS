const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
const input = [];
rl.on("line", function (line) {
    if (!line) rl.close();
    else {
        input.push(line);
    }
}).on("close", function () {
    let testCase = parseInt(input[0]);
    for (let i = 1; i <= testCase; i++) {
        let students = input[i].split(" ").map(Number);
        let num = students.shift();
        let average = students.reduce((pre, cur) => (pre + cur), 0) / num;
        let superStudents = students.filter((x) => x > average);
        let answer = superStudents.length / num * 100
        console.log(answer.toFixed(3) + '%');
    }
    process.exit;
})