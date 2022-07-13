function solution(board, moves) {
    var answer = 0;
    let downs = [];
    let down;
    let idx;
    for (let i = 0; i < moves.length; i++) {
        idx = moves[i];
        for (let j = 0; j < board.length; j++) {
            down = board[j][idx - 1];
            if (down === 0) continue;
            else {
                if (down === downs.slice(-1)[0]) {
                    downs.pop();
                    answer += 2;
                } else {
                    downs.push(down);
                }
                board[j][idx - 1] = 0;
                break;
            }
        }
    }
    return answer;
}