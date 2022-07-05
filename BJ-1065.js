const input = parseInt(require("fs").readFileSync("./input.txt").toString().trim());

function hansuCounter(num) {
    let counter = 0;
    function hansuHelper(num) {
        if (num === 0) return;
        if (String(num).length === 1) counter++;
        else {
            let candidate = String(num);
            var hansu = true;
            let first = Number(candidate[0]) - Number(candidate[1]);
            for (let i = 1; i < candidate.length - 1; i++) {
                if (first !== (Number(candidate[i]) - Number(candidate[i + 1]))) {
                    hansu = false;
                    break;
                }
            }
            if (hansu) counter++;
        }
        hansuHelper(Number(num) - 1);
    }
    hansuHelper(num);
    return counter;
}

console.log(hansuCounter(input));