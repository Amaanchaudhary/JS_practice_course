const score = 400;
// console.log(score);

const balance = new Number(score);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 12.3155;
// console.log(otherNumber.toPrecision(3));

const otherNumber2 = 1000000;
// console.log(otherNumber2.toLocaleString('en-IN'))

//++++++++++++Maths++++++++++++

// console.log(Math)
// console.log(Math.abs(-1)) //   Negative val to pos+
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.8))
// console.log(Math.sqrt(25))
// console.log(Math.min(4,5 ,34 , 3,5))
// console.log(Math.max(4,5 ,34 , 3,5))
// console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
