// 1. 하나의 값을 입력 받을 때
const input1 = require("fs").readFileSync("./hello.txt").toString().trim();
console.log(input1);

// 2. 공백으로 구분된 한 줄의 값들을 입력 받을 때
const input2 = require("fs").readFileSync("./hello.txt").toString().trim().split(" ");
console.log(input2);

// 3. 여러 줄의 값들을 입력 받을 때
const input3 = require("fs").readFileSync("./hello.txt").toString().trim().split("\n");
console.log(input3);

// 4. 첫번째 줄에 자연수 n을 입력받고, 그 다음줄부터 공백으로 구분된 n개의 값들을 입력받을 때
const [i, ...arr] = require("fs").readFileSync("./hello.txt").toString().trim().split("\n");
input4 = arr[0].split(" ");
console.log(input4);
// 5. 첫번째 줄에 자연수 n을 입력받고, 그 다음부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
const [j, ...input5] = require("fs").readFileSync("./hello.txt").toString().trim().split("\n");
for(let i = 0; i < input5.length; i++){
    input5[i] = input5[i].trim();
}
console.log(input5);
// 배열의 내용을 전부 숫자로 바꾸고 싶다면? 마지막에 .map(Number);