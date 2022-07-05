let input = require("fs").readFileSync("./input.txt").toString().trim();

let croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
for (let i = 0; i < croatia.length; i++) {
    if (input.includes(croatia[i])) {
        input = input.split(croatia[i]).join("A");
    }
}

console.log(input.length);

// let croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
// let origin;
// let total = 0;
// for (let i = 0; i < croatia.length; i++) {
//     if (input.includes(croatia[i])) {
//         origin = input;
//         input = input.split(croatia[i]).join("");
//         if (croatia[i].length === 2) {
//             total += (origin.length - input.length) / 2;
//         } else {
//             total += (origin.length - input.length) / 3;
//         }
//     }
// }
// total += input.length;

// console.log(total);