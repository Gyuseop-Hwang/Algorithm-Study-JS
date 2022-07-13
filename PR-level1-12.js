function solution(n, arr1, arr2) {
    var answer = [];
    let cryptoArr1 = [];
    let cryptoArr2 = [];
    let crypto;
    let decode;
    for (let i = 0; i < n; i++) {
        crypto = arr1[i].toString(2);
        while (crypto.length !== n) crypto = '0' + crypto;
        cryptoArr1.push(crypto);
        crypto = arr2[i].toString(2);
        while (crypto.length !== n) crypto = '0' + crypto;
        cryptoArr2.push(crypto);
    }
    for (let i = 0; i < n; i++) {
        decode = '';
        for (let j = 0; j < n; j++) {
            if (cryptoArr1[i][j] === '1' || cryptoArr2[i][j] === '1') decode += '#';
            else decode += " ";
        }
        answer.push(decode);
    }
    return answer;
}