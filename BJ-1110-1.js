const input = require("fs").readFileSync("./input.txt").toString().trim();
function cycleCounter(input) {
    let counter = 0;
    let adder;
    let newNum;
    function cycle(num) {
        if (num.length === 2 && num[0] === '0') num = String(Number(num));
        if (Number(num) < 10) num = '0' + num;
        adder = Number(num[0]) + Number(num[1]);
        if (adder >= 10) newNum = num[1] + String(adder)[1];
        else newNum = num[1] + String(adder)[0];
        counter++;
        if (Number(newNum) === Number(input)) return;
        cycle(newNum)
    }
    cycle(input);
    console.log(counter);
}

function cycleCounter(input) {
    let counter = 0;
    let adder;
    let newNum;
    function cycle(num) {
        num = String(num);
        if (num < 10) num = '0' + num;
        adder = Number(num[0]) + Number(num[1]);
        if (adder >= 10) newNum = num[1] + String(adder)[1];
        else newNum = num[1] + String(adder)[0];
        counter++;
        if (Number(newNum) === Number(input)) return;
        cycle(Number(newNum))
    }
    cycle(input);
    console.log(counter);
}

cycleCounter(input);