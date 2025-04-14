'use strict';


// (True Or False)
// //ex1 אכן יהיה alert
// if("0"){

// alert("Hello");

// }

// ex2

// let answer = prompt("whats JS full name")
// if(answer==="ECMAscript"){
//    alert("Correct !");}
// else {
// alert("nope its ECMAscript");
// }

// ex3
// let score = 75;

// let grade = (score >= 90) ? "A" : (score >= 80) ? "B" :
//     (score >= 70) ? "C" : (score >= 60) ? "D" : "F";


// console.log("The grade is ", grade);

// ex4

// let answer = prompt ("Whats the number you choose ?")
// if (answer==0){

// alert('0');
// }
// if (answer<0){

//     alert('-1');
// }
// if (answer>1){

//     alert ('1');
// }

// ex5

// let result = (a+b<4) ? 'Not enough' : 'A lot !';

// ex6

// let message = (login == 'Employee'||login == 'Director' ) ? 'Hello' :

// (login == '') ? 'No Login': '';

// ex7

// console.log(false || 'sdf', false && '', true || '', true && '', undefined || null, undefined || 0 || null, undefined && 0 && null, 1 || 0, null || 1, null || 0 || 1);


//Loops

//ex1

// let i = 0,  sum = 0;

// while (i<=100){
//     sum+=i;
// i++;
// }
// console.log(sum);

// ex2

// let number;

// do {
//   let input = prompt("What's the number you choose?");
//   number = Number(input);

//   if (isNaN(number)) {
//     console.log("That's not a number!");
//   } else if (number <= 0) {
//     console.log("Enter a larger number (Positive)");
//   }

// } while (isNaN(number) || number <= 0);

// console.log("Your number is", number);

//ex3


// let num = 7;

// for (let i = 1;i<=10;i++){

// console.log(num + " x " + i + " = " + (num * i));

// }

//ex4

// const SECRET = 7;

// for (let i = 0; i < 10; i++) {
//   let guess = Number(prompt("נחש מספר בין 1 ל-10"));

//   if (guess === SECRET) {
//     console.log("נכון !");
//     break;
//   } else {
//     console.log("לא נכון נסה שוב");
//   }
// }

//ex5

// for (let i = 1; i <= 30; i++) {
//     if (i % 3 === 0) {
//       continue;
//     }
//     console.log(i);
//   }

//ex6  הערך יציג את הערך של (I=3)   בהתחלה ואז ירד איתה כל פעם בספרה אחת עד שיגיע לאפס ואז הלולאה תחשב שקר כי זו הדרך שהפונקציה עובדת

// let i = 3;

// while (i) {
//   alert( i-- );
// }

//ex 7 no at i++ it shows 1 to 5 and at ++i it shows 1-4

// let i = 0 

// while (i++<5) console.log(i);

//ex 8 yes here the have the same output

// for (let i = 0;i<5;i++) console.log (i);

//ex9

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 != 0) {
//       continue;
//     }
//     console.log(i);
//   }

//ex 10

// let i = 0

// while (i<3){
//     i++
//     alert( `number ${i}!` );
//   }