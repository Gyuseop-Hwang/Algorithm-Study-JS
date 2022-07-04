// ["muzi", "frodo", "apeach", "neo"]
// ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
// 2
// 신고 결과 받기
function solution(id_list, report, k) {
    var answer = [];
    let fc1 = {};
    let fc2 = {};
    let bad_UserList = [];
    for (let i = 0; i < id_list.length; i++) {
        fc1[id_list[i]] = [];
    }
    for (let i = 0; i < report.length; i++) {
        let act_User = report[j].split(" ")[0];
        let bad_User = report[j].split(" ")[1];
        if (!fc1[act_User].includes(bad_User)) {
            fc1[act_User].push(bad_User);
            fc2[bad_User] = (fc2[bad_User] || 0) + 1;
        }
    }
    for (let key in fc2) {
        if (fc2[key] >= k) {
            bad_UserList.push(key);
        }
    }
    let act_UserList = Object.values(fc1);
    for (let i = 0; i < act_UserList.length; i++) {
        let counter = 0;
        for (let key of bad_UserList) {
            if (act_UserList[i].includes(key)) counter++;
        }
        answer.push(counter);
    }

    return answer;
}