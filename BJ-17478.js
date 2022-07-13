const input = parseInt(require("fs").readFileSync("./input.txt").toString().trim());

function recursivePrint(input) {
    console.log("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.");
    let question = '"재귀함수가 뭔가요?"';
    let lorem1 = '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.';
    let lorem2 = '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.';
    let lorem3 = '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."';
    let answer = '"재귀함수는 자기 자신을 호출하는 함수라네"';
    let i = 0;
    function recursive(num) {
        if (i === input) {
            console.log(question);
            console.log(answer);
            return;
        }
        console.log(question);
        console.log(lorem1);
        console.log(lorem2);
        console.log(lorem3);
        question = "____" + question;
        lorem1 = "____" + lorem1;
        lorem2 = "____" + lorem2;
        lorem3 = "____" + lorem3;
        answer = "____" + answer;
        i++;
        recursive(i);
    }
    function lastRecursive(num) {
        let last = '라고 답변하였지.';
        if (i === 0) {
            console.log(last);
            return;
        }
        last = '____'.repeat(num) + last;
        console.log(last);
        i--;
        lastRecursive(i);
    }
    recursive(i);
    lastRecursive(i);
    return;
}

recursivePrint(input);