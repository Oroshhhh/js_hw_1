'use strict';


//ex5

// const fruits = ["apple", "banana", "cherry", "date"];

// fruits.splice(1,1,"Blueberry","Blackberry")
// console.log (fruits);

//ex6

// const colors = ["red", "orange", "yellow", "green", "blue"];
// colors.splice (0,1)
// colors.splice (2)
// console.log (colors)

//ex7
// const animals1 = ["cat", "dog"];
// const animals2 = ["lion", "tiger"];

// const Allanimals = animals1.concat(animals2)

// console.log (Allanimals);


//ex8

// const numbers = [7, 3, 9, 1, 5];

// numbers.sort()
// console.log(numbers);

//ex9

// const letters = ["a", "b", "c", "d"];

// letters.reverse()

// console.log (letters);


//ex10

// const sentence = "JavaScript is awesome";

// const saparate = sentence.split(" ")

// console.log (saparate);

//ex11

// const words = ["Hello", "world"];

// const sentence = words.join(" ")

// console.log (sentence);


//ex14

// const students = ["דני", "נועה", "רן", "תמר"];

// students.forEach(function(name) {
//   console.log(" שלום " + name + " בהצלחה במבחן !");
// });


//ex15

// const pricesILS = [100, 250, 75, 320];
//  const pricesUSD = pricesILS.map(function(price) {
// return (price/3.5).toFixed (2)

//  })
//  console.log (pricesUSD);

//ex16

// const users = [
//     { username: "Tom", isLoggedIn: true },
//     { username: "Jerry", isLoggedIn: false },
//     { username: "Spike", isLoggedIn: true }
//     ];

//     const loggedin = users.filter (function(user) {
//         return user.isLoggedIn === true ;
    
//     })

//     console.log (loggedin);

//ex17

// const products = [
//     { name: "Book", quantity: 3 },
//     { name: "Pen", quantity: 0 },
//     { name: "Notebook", quantity: 5 }
//     ];

//     const iszero = products.filter (function(zero){
//         return zero.quantity === 0

//     })

//     console.log (iszero);


//ex18

// const grades = [72, 85, 90, 67, 58];

// const allpassed = grades.every (function(check) {

// return check > 60
// })

// console.log (allpassed);

//ex19

// const employees = [
//     { name: "Sharon", salary: 9500 },
//     { name: "David", salary: 7800 },
//     { name: "Lior", salary: 12000 }
//   ];
  
//   const highEarners = employees
//     .filter(function(emp) {
//       return emp.salary > 8000;
//     })
//     .map(function(emp) {
//       return emp.name.toUpperCase();
//     });
  
//   console.log(highEarners);

//ex20

// const books = [
//     { title: "Book A", pages: 450 },
//     { title: "Book B", pages: 520 },
//     { title: "Book C", pages: 600 }
//   ];
  
//   const hasBigBook = books.some(function(book) {
//     return book.pages > 500;
//   });
  
//   if (hasBigBook) {
//     const bigBooks = books.filter(function(book) {
//       return book.pages > 500;
//     });
//     console.log(bigBooks);
//   } else {
//     console.log("אין ספרים עם מעל 500 עמודים");
//   }