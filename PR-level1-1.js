// "one4seveneight"
// "23four5six7"
// "2three45sixseven"
// "123"
// 숫자문자열과 영단어
const input = require("fs").readFileSync("./input.txt").toString().trim();

function solution(s) {
    let newNumber = "";
    var answer = 0;
    let StringNumber = {
        'zero': '0',
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9'
    }
    let charCollector = "";
    for (let i = 0; i < s.length; i++) {
        if (Number.isNaN(Number(s[i]))) {
            charCollector += s[i];
            if (StringNumber.hasOwnProperty(charCollector)) {
                newNumber += StringNumber[charCollector];
                charCollector = "";
            }
        } else {
            newNumber += s[i];
        }
    }
    answer = Number(newNumber);
    return answer;
}

function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for (let i = 0; i < numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}

console.log(solution(input));