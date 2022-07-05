//1 2 3 4 5
const input = require("fs").readFileSync("./input.txt").toString().trim().split(" ").map(Number);

function solution(answers) {
    var answer = [];
    let fool1 = [1, 2, 3, 4, 5];
    let fool2 = [2, 1, 2, 3, 2, 4, 2, 5]
    let fool3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let fools = [fool1, fool2, fool3];
    let cycleIdx;
    let score;
    let scores = [];
    for (let fool of fools) {
        score = answers.reduce((pre, cur, i) => {
            cycleIdx = i % fool.length;
            if (cur === fool[cycleIdx]) return pre + 1;
            else return pre;
        }, 0)
        scores.push(score);
    }
    let high = Math.max(...scores);
    answer = scores.reduce((pre, cur, i) => {
        if (cur === high) {
            pre.push(i + 1);
            return pre;
        } else return pre;
    }, [])
    return answer;
}

console.log(solution(input));