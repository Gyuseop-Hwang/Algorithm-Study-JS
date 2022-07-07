// 이상한 문자 만들기

function solution(s) {
    var answer = '';
    let words = s.split(" ");
    let word;
    for (let i = 0; i < words.length; i++) {
        word = words[i].split("");
        for (let j = 0; j < words[i].length; j++) {
            if (j % 2 === 0) word[j] = word[j].toUpperCase();
            else word[j] = word[j].toLowerCase();
            console.log(word);
        }
        word = word.join("");
        console.log(word);
        if (i === words.length - 1) answer += word;
        else answer += word + " ";
    }
    return answer;
}

solution("try hello world")