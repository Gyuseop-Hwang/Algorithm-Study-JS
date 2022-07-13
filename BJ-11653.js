const input = parseInt(require("fs").readFileSync("./input.txt").toString().trim());

function dividerByPrime(num) {
    let answer = '';
    if (num === 1) return answer;
    function primeMaker(num) {
        let divider = num;
        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            if (num % i === 0) {
                answer += i + '\n';
                divider = i;
                break;
            }
        }
        if (num === divider) {
            answer += divider + '\n';
            return;
        }
        primeMaker(num / divider);
    }
    primeMaker(num);
    return answer;
}

console.log(dividerByPrime(input));