function solution(n) {
    var answer = 0;
    let three = '';
    while (true) {
        if (n < 3) {
            three = String(n) + three;
            break;
        }
        three = String(n % 3) + three;
        n = Math.floor(n / 3);
    }
    three = three.split("").reverse().join("");
    for (let i = 0; i < three.length; i++) {
        answer += Number(three[i]) * Math.pow(3, three.length - 1 - i)
    }

    return answer;
}

function solution(n) {
    var answer = 0;
    answer = parseInt(n.toString(3).split("").reverse().join(""), 3)
    return answer;
}