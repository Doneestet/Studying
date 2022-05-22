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

// let ans = prompt("", ""),  // спрашиваем ввести что-то
//     arr = [];   //создаем массив

// arr = ans.split(",");  // разделяет запятой жлементы
// console.log(arr);

// let arr = ["asdasd", 'wfwefw', 'ewwef', '23fre'];
//     i = arr.join(", ");  // склеивает строки

// console.log(i);

// let arr = [1, 15, 4];
//     i = arr.sort(compareNum);  

// function compareNum(a,b){  // callback функция
//     return a - b;         
// }
// console.log(i);

//  в предыдущем примере выведе 1, 15, 4
// с обратной функцией 1, 4, 15

// let soldier = {
//     health: 400,
//     armor: 100
// };

// let John = {
//     health: 100
// };
// John.__proto__ = soldier;

// console.log(John);
// console.log(John.armor);

// function BigUser() {

//     this.name = "Вася";
  
//     return { name: "Godzilla" };  // <-- возвращает этот объект
//   }
  
// alert( new BigUser().name ); 

// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.


// function Calculator(){
//     this.read = function () {
//         this.a = +prompt('a?', 0),
//         this.b = +prompt('b?', 0);
//     };
//     this.sum = function () {
//         return this.a + this.b;
//     };
//     this.mul = function () {
//         return this.a * this.b;
//     };
// }
// let calculator = new Calculator();
// calculator.read();


// alert('Sum= ' + calculator.sum() );
// alert('Mul= ' + calculator.mul());

// function Calculator(){
//     this.read = function () {
//         this.a = +prompt('a?', 0),
//         this.b = +prompt('b?', 0);
//     };
//     this.sum = function () {
//         return this.a + this.b;
//     };
//     this.mul = function () {
//         return this.a * this.b;
//     };
// }
// let calculator = new Calculator();
// calculator.read();


// alert('Sum= ' + Calculator.sum() );
// alert('Mul= ' + Calculator.mul());

// Напишите функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.



// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function () {
//         this.value += +prompt(' Сколько добавить?', 0);
//     };
// }

// let accumulator = new Accumulator(2);

// accumulator.read();
// accumulator.read();

// console.log(accumulator);
// alert(accumulator.value);

