function solution(a, b) {
    var answer = '';
    let day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']
    let month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30]
    let total = 0;
    for (let i = 0; i < a; i++) {
        total += month[i];
    }
    total += b;
    let idx = total % 7
    if (idx === 0) answer = day[6];
    else answer = day[idx - 1]
    return answer;
}

console.log(solution(12, 1));