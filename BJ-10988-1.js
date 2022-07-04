const input = require("fs").readFileSync("./input.txt").toString().trim();
// 하나의 값을 입력받을 때
// 입력 1 : level 
// 입력 2 : baekjoon
// let result;
// function isPallindrome(str) {
//     let newStr = "";
//     function helper(helperInput) {
//         if (helperInput.length === 0) return;
//         newStr = newStr + helperInput.slice(-1);
//         helper(helperInput.slice(0, -1));
//     }
//     helper(str);
//     if (newStr === str) result = 1;
//     else result = 0;
//     console.log(result);
// }
// isPallindrome(input);

function isPallindrome(str) {
    if (str.length === 0) return '';
    return str.slice(-1) + isPallindrome(str.slice(0, -1))
}

if (isPallindrome(input) === input) console.log(1);
else console.log(0);

let result = 1;
let i = 0;
let j = input.length - 1;
while (i < j) {
    if (input[i] !== input[j]) {
        result = 0;
        break;
    }
    i++;
    j--;
}

console.log(result);