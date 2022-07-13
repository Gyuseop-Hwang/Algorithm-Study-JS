const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
let input;
rl.on("line", function (line) {
    input = parseInt(line);
    rl.close();
}).on("close", function () {
    function sugarCounter(num) {
        let counter = 0;
        let a;
        function sugarWork(num) {
            if (num < 3) {
                counter = -1;
                return counter;
            }
            a = num % 5;
            if (a === 0) return num / 5 + counter;
            if (a % 3 === 0) return Math.floor((num / 5)) + (a / 3) + counter;
            counter++;
            return sugarWork(num - 3);
        }
        return sugarWork(num);
    }
    console.log(sugarCounter(input));
    process.exit;
})