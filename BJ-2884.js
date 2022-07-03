const input = require("fs").readFileSync("./input.txt").toString().trim().split(" ").map(Number);
let time = input[0] * 60 + input[1] - 45;
let hour = 0;
let minute = 0;
if (time < 0) {
    time += 24 * 60;
    hour = Math.floor(time / 60);
    minute = time % 60;
} else {
    hour = Math.floor(time / 60);
    minute = time % 60;
}
console.log(hour, minute);
