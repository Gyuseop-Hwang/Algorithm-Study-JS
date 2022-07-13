function beeHouseNumerical(n) {
    if (n === 1) return 1;
    let i = 1;
    while (true) {
        if (i === 1) n -= 1;
        else n -= 6 * (i - 1);
        if (n <= 0) break;
        i++;
    }
    return i;
}

console.log(beeHouseNumerical(13));