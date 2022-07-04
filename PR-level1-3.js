const input = require("fs").readFileSync("./input.txt").toString().trim().split("\n");
let lottos = input[0].split(" ").map(Number);
let win_nums = input[1].split(" ").map(Number);

function solution(lottos, win_nums) {
    var answer = [];
    let minNum = 0;
    let maxNum = 0;
    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] === 0) maxNum++;
        else if (win_nums.includes(lottos[i])) {
            minNum++;
            maxNum++;
        }
    }
    answer = answer.concat(maxNum, minNum);
    for (let i = 0; i < answer.length; i++) {
        switch (answer[i]) {
            case 6: answer[i] = 1;
                break;
            case 5: answer[i] = 2;
                break;
            case 4: answer[i] = 3;
                break;
            case 3: answer[i] = 4;
                break;
            case 2: answer[i] = 5;
                break;
            default: answer[i] = 6;
                break;
        }
    }
    return answer;
}

console.log(solution(lottos, win_nums));