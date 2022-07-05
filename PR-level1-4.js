// ...!@BaT#*..y.abcdefghijklm
const input = require("fs").readFileSync("./input.txt").toString().trim();

function solution(new_id) {
    var answer = '';
    new_id = new_id.toLowerCase();
    answer = new_id.split("");
    answer = answer.filter((x, i, arr) => {
        if (/[a-z0-9]/.test(x)) return true;
        else if (x === '-' || x === '_' || (x === '.')) return true;
    })
    answer = answer.filter((x, i, arr) => {
        if ((x === '.' && arr[i + 1] === '.')) return false;
        else return true;
    })
    if (answer[0] === '.') answer.shift();
    if (answer.slice(-1)[0] === '.') answer.pop();
    if (answer.length === 0) answer.push("a");
    if (answer.length >= 16) {
        answer.splice(15);
        if (answer.slice(-1)[0] === '.') answer.pop();
    }
    if (answer.length <= 2) {
        let last = answer.slice(-1)[0];
        while (answer.length !== 3) answer.push(last);
    }
    answer = answer.join("");
    return answer;
}

console.log(solution(input));
// "bat.y.abcdefghi"