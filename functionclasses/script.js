
// function User(name, id){  //функция конструктор: можем создавть новых пользователей
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log("Hello " + this.name);
//     };
// }
// User.prototype.exit = function () {
//     console.log("Пользователь " + this.name + " ушел");
// };

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.exit();


// Es6 стандарт

// class User{
//     constructor(name, id){
//         this.name = name;
//         this.id = id;
//         this.human = true; 
//     }
//     hello(){
//         console.log(`Hello! ${this.name}`)
//     }
//     exit(){
//         console.log(`Пользователь ${this.name}  ушел`)
//     }
// }
// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);
// ivan.hello();
// alex.hello();

// // 1) Просто вызов функции - window / indefined

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;  // пытается найти значения внутри функц. потом поднимается выше и берет их из showThis и подставляет
//     }
//     console.log(sum());
// };
// showThis(4 ,5);
// showThis(3, 8);

// // 2) Метод объекта - this = объект

// let obj = {
//     a: 10,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };
// obj.sum();


// // 3) Конструктор (new) - this = новый созданный объект

// class User{
//     constructor(name, id){
//         this.name = name;
//         this.id = id;
//         this.human = true; 
//     }
//     hello(){
//         console.log(`Hello! ${this.name}`)
//     }
//     exit(){
//         console.log(`Пользователь ${this.name}  ушел`)
//     }
// }
// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

// 4) Указание конкретного контекста - call, apply, bind

let user = {
    name: "John"
};

function sayName(){
    console.log(this);
    console.log(this.name + surname);
}

console.log(sayName.call(user, "Smith"));
console.log(sayName.apply(user, ["Snow"]));

function count(number) {
    return this * number;
}

let double = count.bind(2); // реже остальных используется (часто в react)
console.log(double(3));
console.log(double(10));