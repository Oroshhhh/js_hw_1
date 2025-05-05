'use strict';

//ex1

// let name = 'Mary'
// let activity = 'drink tea'
// let bio = 'Our guest ' + name + activity + '.'
// console.log( bio.length )

//ex2

// const str = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'

// let index = prompt ('insert place number from 0 ahead');
// let letter = str[index];

// alert ('the letter is : '+ letter);

//ex3

// let str = prompt('insert a string:');

// let lastChar = str[str.length - 1];       
// let secondLastChar = str[str.length - 2];  
// alert('last char is : ' + lastChar + '\n the char before that is : ' + secondLastChar);

//ex4

// let str = 'abcde';
// let reversed = '';

// for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
// }

// console.log(reversed);

//ex5

// const str = 'js'

// console.log (str.toUpperCase());

//ex6

// const str = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';

// let Input = prompt('enter a string to search :');

// if (str.includes(Input)) {
//     alert('exist !');
// } else {
//     alert('not exist !');
// }


//ex7


// let str = '1-2-3-4-5';
// let newStr = '';

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === '-') {
//         newStr += '.';
//     } else {
//         newStr += str[i];
//     }
// }

// console.log(newStr);

//ex8


// let str = '1-2-3-4-5';
// let newStr = str.replaceAll('-', '.');

// console.log(newStr);


//ex9

// const str = 'sdfwe'
// console.log (str.substring(4, 2)); //fw

//ex10

// let str = "I'm learning javascript";


// let word1_substr = str.substr(4, 8);
// let word1_substring = str.substring(4, 12); 
// let word1_slice = str.slice(4, 12);


// let word2_substr = str.substr(13);
// let word2_substring = str.substring(13);
// let word2_slice = str.slice(13);

// console.log('learning:', word1_substr, word1_substring, word1_slice);
// console.log('javascript:', word2_substr, word2_substring, word2_slice);

//ex11

// const str = 'http://www.notion.so/String-820cf1e906884d8fb9c02236fe1c6dcb/';

// if (str.indexOf('http://') === 0) {
//     console.log("string does start with : 'http://'");
// } else {
//     console.log("string not start with : 'http://'");
// }

//ex12

// const str = 'https://www.notion.html';

// if (str.indexOf('.html') === str.length - 5) {
//     console.log("string does end at .html");
// } else {
//     console.log("string doesnt end at .html");
// }

//ex13

// const str = 'ab cd cd cd ef';
// console.log (str.lastIndexOf('cd')); //9
// console.log (str.lastIndexOf('cd', 8)); //6

//ex14

// const str = 'abcde';

// console.log(str.startsWith('abc')); //true
// console.log(str.startsWith('xxx')); // false
// console.log(str.startsWith('bc', 1)); // true

//ex15

// const str = 'abcde';

// console.log(str.endsWith('cde'));//true 
// console.log(str.endsWith('xxx'));//false
// console.log(str.endsWith('bc', 3));//true

//ex16

// let str = 'ab-cd-ef';

// console.log(str.split('-'));// Array 3
// console.log(str.split('-', 2));// Array 2
// console.log(str.split(''));// Array 8
// console.log(str.split('', 3));// Array 3

// let str2 = '12345';
// console.log(str2.split(''));// Array 5