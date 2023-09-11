"use strict"

// function divide(a, b, errorCallback, successCalback) {
//     if (b === 0) {
//         errorCallback("Can't be divide to zero")
//     } else {
//         let result = a / b;
//         successCalback(`${result} - Divided success`)
//     }
// }

// function getError(error) {
//     console.log("Error: " + error);
// }

// function getSuccess(success) {
//     console.log("Success: " + success);
// }

// divide(10, 6, getError, getSuccess);


// let nums = [2, 5, 4, 3, 7];

// function checkOddNums(num) {
//     return num %2 == 1;
// }

// function checkEvenNums(num) {
//     return num %2 == 0;
// }


// function calculateNums(numbers, callback) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
        
//         if (callback(numbers[i])) {
//             sum+=numbers[i]
//         }
//     }

//     console.log(sum);
// }

// calculateNums(nums,m => m >4);

// calculateNums(nums,checkOddNums);
// calculateNums(nums,checkEvenNums);

// let text = "Yasha Azerbaycan Azer"

// console.log(text.length)

//console.log(text.slice(-4,-1))

// console.log(text.substring(0,5))

// console.log(text.substr(0,5));

// let result = text.replaceAll("Azer", "Test");

// console.log(result);

// let test = text.slice(0,5);

// console.log(text);

// let text1 = "Hello World";
// let tex2 =  text1.toUpperCase();

// console.log(text2);

// let name = "Pervin";

// let surname = "Mirzeyev";

// let result = name.concat("-", surname);

// console.log(result);

//  let tex1 = "Salam";

//  let text2 = "   Salam";

//  console.log(text1 == text2.trim());

// console.log( text1. charAt(1));
// console.log(text1.charCodeAt(1));


// document.onkeydown = function (e) {
//     if (e.keyCode == 13) {
//         alert("Pressed enter")
//     }
// }

// let text = "Yasasin, Azerbaycan dovleti";

// for (let i = 0; i < text.length; i++) {
//     if (text[i] == "c") {
//         console.log("yes");
//     }
    
// }

// let data = text.split(",");

// data.forEach(element => {
//     console.log(element);
// });

// console.log(text);

// let numbers = [1,3,5,6,7];

// numbers.push(200);

// numbers.unshift(100);

// numbers.pop();
// numbers.shift();

// console.log(numbers.length)

// let res = numbers.toString();


// console.log(res);

// let nums = [4,5,6,7,8];

// let result = numbers.join("-");

// console.log(result);

// let arr2 = numbers;

// arr2[0] = 300;

// console.log(arr2);

// console.log(numbers);

// let num1 = 5;

// let num2 = num1;

// num2 = 100;

// console.log(num2);
// console.log(num1);

// let numbers = [1,3,5,6,7];

// delete numbers[0];

// console.log(numbers)

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Email", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);

// console.log(myChildren);

// const nums = [1,2,3];

// nums[0] = 100;

// nums.push(5);

// console.log(nums)

// nums = [1,2,3];

// const fruits = ["Banana", "Orange", "Apple", "Mango",];
// fruits.splice(2,1, "Lemon", "Kiwi");

// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango",];
// fruits.splice(0, 2);

// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango",];
// const citrus = fruits.slice(2)

// console.log(fruits);
// console.log(citrus);

// let address = "Ehmedli";

// console.log(address.includes("o"));

// let nums = [1,2,3,4,5];

// console.log(nums.includes(3));

// nums.forEach(element => {
//     console.log(element);
// });

// let filteredDatas = nums.filter(m => m > 3 && m<5);

// console.log(filteredDatas);

// let result = nums.findIndex(m => m == 5);

// console.log(result);

// let text = "Lorem Ipsum is simply. Dummy text of the printing";

// const makeSubstring = text =>{
//     let textArray = text.split("");

//     let substringIndex = textArray.findIndex(m => m == "D");

//     let substringText = text.substring(0, substringIndex);

//     return substringText
// }

// let result = makeSubstring(text) + "....";

// document.querySelector("h1").innerText = result

let ages = [20, 21, 23, 55, 66];

// let result = ages.map(function (elem) {
//     if (elem % 2 == 0) {
//         return elem * 2
//     }else{
//         result elem;
//     }
// })

ages.forEach((element, index) => {
    ages[index] = element *2
})

console.log(ages);

// console.log(result);


