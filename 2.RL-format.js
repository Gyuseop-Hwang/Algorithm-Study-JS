const rl = require("readline").createInterface({
    input : process.stdin,
    output : process.stdout
})

// 1. 하나의 값을 입력 받을 때
// let input;
// rl.on("line", function(line){
//     input = line;
//     rl.close()
// }).on("close", function(){
//     console.log(input, typeof input);
//     process.exit;
// })

// 2. 공백으로 구분된 한 줄의 값들을 입력 받을 때
// let input;
// rl.on("line", function(line){
//     input = line.split(" ").map(Number);
//     rl.close();
// }).on("close", function(){
//     console.log(input);
//     process.exit;
// })

// 3. 여러 줄에 각각 하나의 값들을 입력 받을 때
// let input = [];
// rl.on("line", function(line){
//     if(!line){
//         rl.close();
//     }
//     else{
//         input.push(line)
//     }
// }).on("close", function(){
//     console.log(input);
//     process.exit;
// })

// 4. 여러 줄의 여러 값들을 입력 받을 때
let input = [];
rl.on("line", function(line){
    if(!line){
        rl.close();
    }
    else{
        input.push(line.split(" ").map(Number));
    }
}).on("close", function(){
    console.log(input);
    process.exit;
})
