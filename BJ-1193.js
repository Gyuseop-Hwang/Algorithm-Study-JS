const input = parseInt(require("fs").readFileSync("input.txt").toString());

function numerical(n) {
    let i = 1;
    let x;
    let y;
    while (true) {
        n -= i;
        if (n <= 0) break;
        i++;
    }
    if (i % 2 === 0) {
        x = -n + 1;
        y = i + n;
    } else {
        x = i + n;
        y = -n + 1;
    }
    console.log(y + '/' + x);
}
numerical(input);