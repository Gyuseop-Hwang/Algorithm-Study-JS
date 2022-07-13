function solution(n) {
    function fibonacci(number) {
        let memo = [0, 1];
        for (let i = 2; i <= n; i++) {
            memo[i] = (memo[i - 2] % 1234567) + (memo[i - 1] % 1234567);
        }
        return memo[number] % 1234567;
    }
    return fibonacci(n)
}

function solution(n) {
    function fibonacci(number, memo = [0, 1]) {
        if (number === 0) return 0;
        if (memo[number]) return memo[number];
        else memo[number] = fibonacci(number - 2, memo) + fibonacci(number - 1, memo);
        return fibonacci(number - 2, memo) + fibonacci(number - 1, memo);
    }
    return fibonacci(n) % 1234567;
}

// function solution(n) {
//     var answer = 0;
//     function fibonacci(number) {
//         if (number === 0) return 0;
//         if (number <= 1) return 1;
//         return fibonacci(number - 2) + fibonacci(number - 1);
//     }
//     answer = fibonacci(n) % 1234567;
//     return answer;
// }

console.log(solution(100));