// let box = document.querySelector('.box');
// box.style.backgroundColor = "red";
// box.style.width = '200px';
// box.style.height = '200px';

// window.addEventListener('DOMContetntLoaded', function(){
        

//     box.addEventListener('touchmove', function (e){
//         e.preventDefault();
//         console.log("Red box : touchstart ");
//     });

//     box.addEventListener('touchend', function (e){
//         e.preventDefault();
//         console.log("Red box : touchend");
//     });
// });


// box.addEventListener('touchstart', function (e){
//     e.preventDefault();
//     console.log("Red box : touchstart ");
//     console.log(e.target); //только тот элем. который тапнули
//     console.log(e.touches); // получаем все пальцы которые прикоснулись к сенсорной поверхности
//     console.log(e.changedTouches); // списко пальцев которые повзаимодействовали с нашим экраном
//     console.log(e.targetTouches); // регистрируем только те пальцы которые взаимодействуют с нашим элементом
// });

// new RegExp("pattern", 'flags');
// /pattern/



// console.log(pass.replace(/./g, "*")); // Заменяет имя на *
// alert('12-46-23'.replace(/-/g, ':')); // заменяет все - на :

// let ans = prompt("Введите ваше имя ");
// let reg = /\d/g;  // ищем все числа 
// console.log(ans.match(reg));
// console.log(ans.search(reg)); // search - поиск, только до первого совпадения
// console.log(ans.match(reg));  // match - более мощный поиск
// i - флаг регистра, мы хотим найти что-то внезависимости от регистра
// g - ищем глобально, не только 1 вхождение, но и все оствльные
// m - флаг многострочности

let str = "my name is R2D2";
console.log(str.match(/\*/));  // запись для спецсимволов

