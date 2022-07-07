

function solution(s, n) {
    var answer = '';
    let password = s.split("");
    let letter;
    let code;
    for (let i = 0; i < password.length; i++) {
        if (password[i] === " ") continue;
        code = password[i].charCodeAt();
        if (code >= 97 && code <= 122) {
            code = (code + n - 97) % 26 + 97;
            password[i] = String.fromCharCode(code);
        } else {
            code = (code + n - 65) % 26 + 65;
            password[i] = String.fromCharCode(code);
        }
    }
    answer = password.join("");
    return answer;
}