const [n, ...arr] = require("fs").readFileSync("./input.txt", "utf-8").trim().split("\n");
let results;
for (let i = 0; i < n; i++) {
    results = arr[i].trim().split("");
    let counter = 0;
    let total = 0;
    for (let j = 0; j < results.length; j++) {
        if (results[j] === 'O') counter++;
        else {
            total += counter * (counter + 1) / 2;
            counter = 0;
        }
        if (j === results.length - 1) total += counter * (counter + 1) / 2;
    }
    console.log(total);
}
