let A4 = "hiiiiii guys";
let A2 = "hiii guys";
let multipleA = /hi{4,6} guys/;
console.log(multipleA.test(A4)); // Returns true
console.log(multipleA.test(A2)); // Returns false