
let words = "beever";

for (let i = 0; i < words.length; i++) {
  console.log(words.slice(0, i + 1));
}

// let result1 = console.log(words.slice(0, 1));
// let result2 = console.log(words.slice(0, 2));
// let result3 = console.log(words.slice(0, 3));
// let result4 = console.log(words.slice(0, 4));
// let result5 = console.log(words.slice(0, 5));
// let result6 = console.log(words.slice(0, 6));

// Buatlah skema logika untuk memuat kata diatas menjadi berbentuk seperti berikut :
// b
// be
// bee
// beev
// beeve
// beever

// let beever = [];

// beever.push("b");
// beever.push("be");
// beever.push("bee");
// beever.push("beev");
// beever.push("beeve");
// beever.push("beever");

// beever.sort(function (a, b) {
//   return a - b;
// });

// console.log(beever);

// function beeVer(num) {
//   for (var i = 1; i <= num; i++) {
//     if (i % 10 === 0) console.log("beever");
//     else if (i % 3 === 0) console.log("beeve");
//     else if (i % 5 === 0) console.log("beev");
//     else if (i % 6 === 0) console.log("bee");
//     else if (i % 7 === 0) console.log("be");
//     else if (i % 2 === 0) console.log("b");
//     else console.log(i);
//   }
// }

// beeVer(100);
