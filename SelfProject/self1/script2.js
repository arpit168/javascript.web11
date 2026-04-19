// print 1 to 5

// for(let a = 0; a<5000 ; a++){
//     console.log("Raj institute");

// }

// calculate sum of 1 50 5

// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum = sum + i;
// }
// console.log(" sum =", sum);
// console.log("Loop has ended");

// While Loop

// let i = 1;
// while (i <= 5) {
//   console.log(i, "Raj Institute = ");
//   i++;
// }

// for-of-loop

// let str = "JavaScript";

// let size =0
// for(let i of str) {
//     console.log("i =",i );
//     size++

// }
// console.log("string size = ", size);

// for in loop

// let student ={
//     name:"Arpit Gupta",
//     age:26,
//     cgpa:7.5,
//     isPass:true,
// };
// for(let key in student){
//     console.log("key=", key, "value=",student[key]);

// }

// practice question 1

// for(let num=0;num<=100;num++){
//     if(num%2===0)
//     console.log(num);

// }

// practice question 2

// let gameNum = 25;
// let userNum = prompt("Guess the game number : ");

// while (userNum !=gameNum) {
//     userNum = prompt("You entered wrong number, Guess again : ")
// }
// console.log("Congratulation , you entered the right number");

// practice question 3

// let obj = {
//   item: "pen",
//   price: 10,
// };

// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// function arpit() {
//   console.log("Welcome to RICR");
//   console.log("For Learning");
// }
// arpit();

// const arpit = (a,b) => {
//   console.log(a*b);

// }

// function countVowels(str){
//   let count =0;
//   for(const char of str) {
//     if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u' ||
//        char==='A' || char==='E' || char==='I' || char==='O' || char==='U' ){
//         count++;
//        }
//   }
//   return count;
// }

// const countVowels = (str) => {
//    let count =0;
//   for(const char of str) {
//     if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u' ||
//        char==='A' || char==='E' || char==='I' || char==='O' || char==='U' ){
//         count++;
//        }
//   }
//   return count;
// }

// for each Loop

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function printval(val) {
//   console.log("Value =", val);
// });

// let nums = [2, 3, 4, 5];
// let calsqu = (num) => {
//   console.log(num * num);
// };
// nums.forEach(calsqu);

// let nums = [7, 52, 39];

// let newArr = nums.map((val) => {
//   return val * val*val;
// });

// console.log(newArr);

// filter Loops

// let arr = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// let evenArr = arr.filter((val) => {
//   return val % 2 === 0;
// });
// console.log(evenArr);

// Reduce loop method

// let arr = [1, 2, 3, 4];
// const output = arr.reduce((res, curr) => {
//   return res>curr ? prev : curr; //res + curr;
// });
// console.log(output);

// practice

// let marks = [91, 85, 56, 99, 93];

//  let newArr = marks.filter((val) => {
//   return val > 90;
// });
// console.log(newArr);

let n = prompt("enter a number : ");

let arr = [];
for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}

console.log(arr);

let sum = arr.reduce((res, curr) => {
  return res + curr;
});
console.log( "sum = ", sum);


let factorial = arr.reduceRight((res,curr) =>{
  return res * curr;

})
console.log("Factorial =", factorial);
