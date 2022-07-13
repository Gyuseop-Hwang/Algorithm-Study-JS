function solution(N, stages) {
    var answer = [];
    let stageFailure = {};
    let nonClear;
    let challengers;
    let failure;
    for (let i = 0; i < N; i++) {
        nonClear = stages.filter((x) => x === i + 1).length;
        challengers = stages.filter((x) => x >= i + 1).length;
        if (challengers !== 0) failure = nonClear / challengers;
        else failure = 0;
        stageFailure[i + 1] = failure;
    }
    let arr = Object.entries(stageFailure);
    arr = arr.sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < arr.length; i++) {
        answer.push(parseInt(arr[i][0]));
    }

    return answer;
}

function solution(N, stages) {
    var answer = [];
    let stageFailure = {};
    let nonClear;
    let challengers;
    let failure;
    for (let i = 0; i < N; i++) {
        nonClear = stages.reduce((pre, cur) => {
            if (cur === i + 1) return pre + 1;
            else return pre;
        }, 0)
        challengers = stages.reduce((pre, cur) => {
            if (cur >= i + 1) return pre + 1;
            else return pre;
        }, 0)
        if (challengers !== 0) failure = nonClear / challengers;
        else failure = 0;
        stageFailure[i + 1] = failure;
    }
    let arr = Object.entries(stageFailure);
    arr = arr.sort((a, b) => {
        if (b[1] - a[1] > 0) return 1;
        else if (b[1] - a[1] === 0) {
            if (a[0] - b[0] > 0) return 1;
        } else return -1;
    })
    for (let i = 0; i < arr.length; i++) {
        answer.push(parseInt(arr[i][0]));
    }

    return answer;
}

