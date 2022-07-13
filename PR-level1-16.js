function solution(numbers, hand) {
    var answer = '';
    let r = [2, 3];
    let l = [0, 3];
    let m;
    let x1, x2, y1, y2;
    let phone = [[1, 4, 7], [2, 5, 8, 0], [3, 6, 9]];
    for (let i = 0; i < numbers.length; i++) {
        if (phone[0].indexOf(numbers[i]) > -1) {
            answer += 'L';
            l = [0, phone[0].indexOf(numbers[i])];
        }
        else if (phone[2].indexOf(numbers[i]) > -1) {
            answer += 'R';
            r = [2, phone[2].indexOf(numbers[i])];
        }
        else {
            m = [1, phone[1].indexOf(numbers[i])];
            x1 = Math.abs(l[0] - m[0]);
            y1 = Math.abs(l[1] - m[1]);
            x2 = Math.abs(r[0] - m[0]);
            y2 = Math.abs(r[1] - m[1]);
            if (x1 + y1 < x2 + y2) {
                answer += 'L';
                l = m;
            }
            else if (x1 + y1 > x2 + y2) {
                answer += 'R';
                r = m;
            } else {
                if (hand === "left") {
                    answer += 'L';
                    l = m;
                }
                else if (hand === "right") {
                    answer += 'R';
                    r = m;
                }
            }
        }
    }
    return answer;
}