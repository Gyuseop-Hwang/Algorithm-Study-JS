const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})


const input = [];
rl.on("line", function (line) {
    if (!line) rl.close();
    else input.push(line);
}).on("close", function () {
    let words = input.slice(1);
    let counter = words.length;
    for (let word of words) {
        let fc = {};
        for (let i = 0; i < word.length; i++) {
            if (!fc[word[i]]) {
                if (word[i] !== word[i + 1]) {
                    fc[word[i]] = true;
                }
            } else {
                counter--;
                break;
            }
        }
    }
    console.log(counter);
    process.exit;
})