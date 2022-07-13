function solution(sizes) {
    var answer = 0;
    let max1 = 0;
    let max2 = 0;
    for (let i = 0; i < sizes.length; i++) sizes[i] = sizes[i].sort((a, b) => a - b);
    for (let i = 0; i < sizes.length; i++) {
        for (let j = 0; j < 2; j++) {
            if (j === 1) max1 = Math.max(max1, sizes[i][j])
            else max2 = Math.max(max2, sizes[i][j]);
        }
    }
    answer = max1 * max2;
    return answer;
}