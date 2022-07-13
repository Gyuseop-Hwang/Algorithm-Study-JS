function solution(dartResult) {
    let arr = dartResult.split("");
    let sample = '';
    let counter = 0;
    let scores = [];
    for (let i = 0; i < arr.length; i++) {
        switch (true) {
            case arr[i] === '#':
                scores[i - 2 - counter] *= -1;
                counter++;
                break;
            case arr[i] === '*':
                scores[i - 2 - counter] *= 2;
                scores[i - 4 - counter] *= 2;
                counter++;
                break;
            case !Number.isNaN(Number(arr[i])):
                sample += arr[i];
                break;
            case arr[i] === 'S':
                sample = Number(sample);
                scores = scores.concat(sample, 0);
                sample = '';
                break;
            case arr[i] === 'D':
                sample = Number(sample) ** 2;
                scores = scores.concat(sample, 0);
                sample = '';
                break;
            case arr[i] === 'T':
                sample = Number(sample) ** 3;
                scores = scores.concat(sample, 0);
                sample = '';
                break;
        }
    }
    return scores.reduce((pre, cur) => pre + cur);
}

console.log(solution('1T2D3D#'));
