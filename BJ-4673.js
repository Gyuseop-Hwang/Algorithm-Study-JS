let nums = [];
let num;
for (let i = 1; i <= 10000; i++) {
    num = i;
    if (nums.includes[num]) {
        continue;
    }
    else {
        let stringNumber;
        while (true) {
            stringNumber = String(num);
            for (let j = 0; j < stringNumber.length; j++) num += Number(stringNumber[j]);
            if (num > 10000 || nums.includes[num]) break;
            else nums.push(num);
        }
    }
}
let answer = '';
for (let i = 1; i <= 10000; i++) {
    if (!nums.includes(i)) answer += i + '\n';
}
console.log(answer);