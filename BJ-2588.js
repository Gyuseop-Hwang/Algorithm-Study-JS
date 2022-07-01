const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

input = [];
rl.on("line", function (line) {
  if (!line) rl.close();
  else {
    input.push(line);
  }
}).on("close", function () {
  let total = input[0] * input[1];
  for (let i = 2; i >= 0; i--) {
    console.log(input[1][i] * Number(input[0]));
  }
  console.log(+total);
  process.exit;
});
