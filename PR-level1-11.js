function solution(n, lost, reserve) {
    var answer = 0;
    let students = Array.from({ length: n + 1 }, (_, i) => {
        if (lost.includes(i)) return false;
        else return true;
    })
    for (let i = 1; i <= n; i++) {
        if (reserve.includes(i)) {
            if (students[i]) {
                if (students[i - 1] === false) students[i - 1] = true;
                else if (students[i + 1] === false && !reserve.includes(i + 1)) students[i + 1] = true;
            } else {
                students[i] = true;
            }
        }
    }
    if (students.length === n + 2) students.pop();
    answer = students.reduce((pre, cur) => {
        if (cur === true) return pre + 1;
        else return pre;
    }, 0) - 1;
    return answer;
}