'use strict'
//Пример 1
// function learnJS(lang, callback){
//     console.log("Я учу " + lang);
//     callback();
// }

// learnJS("JavaScript", function(){
//     console.log("Я прошел 3-й урок");
// })


//пример 2
// function learnJS(lang, callback){
//     console.log("Я учу " + lang);
//     callback();
// }
// function done(){
//     console.log("Я прошел 3-й урок");
// }
// learnJS("JavaScript", done);
    
// let options = {
//     width: 100,
//     height: 100,
//     name: "test"
// };



// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };

// delete options.bool; // удаляет свойство в объекте
// console.log(options);

// for (let key in options){
//     console.log("Свойство " + key + " Имеет значение " + options[key]);
// }
// console.log(Object.keys(options).length);  // конструкция для взаимодействия с объектом

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function(item, i, mass) {       //item - каждый элем; i - номер; mass-сам масив, название любое
//     console.log(i + ": " + item + "(массив: " + mass + ')');
// });

// console.log(arr);



// let mass = [1, 2, 4, 6, 7];     

// for(let key of mass) {      // перебор значений, не работает в объектах
//     console.log(key);
// }

// for (let i = 0; i < arr.length; i++){  // способ перебрать все значения массива
//     console.log(arr[i]);        

// }
// arr.pop();  // удалить элемент с конца массива
// arr.push('5'); // добавить элемент в массив
// arr.shift();  // удаляет первый элемент
// arr.unshift('1'); // добавляет элемент в начало массва

let ans = prompt("", ""),
    arr = [];

arr = ans.split(",");
console.log(arr);
