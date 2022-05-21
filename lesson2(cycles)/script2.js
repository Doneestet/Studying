'use strict';

let money, time;
function start(){
        money = +prompt('Ваш бюджет на месяц?', '');
        time = prompt('Введите дату в формате YYYY-MM-DD', '');

        while (isNaN(money) || money == "" || money == null){
            money = +prompt('Ваш бюджет на месяц?', '');
        }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


// function choseExpenses() {
//     for (let i = 0; i < 2; i++){
//         let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//             b = prompt('Во сколько обойдется?', '');
//         if ( (typeof(a))=== 'string' && (typeof(a))!=null && (typeof(b)) != null 
//         && a != '' && b != '' && a.length < 50 ) {
//             console.log("done");
//             appData.expenses[a] = b;
//         }else {
    
//         }   
//     }
// }
// choseExpenses();

// // for (let i = 0; i < 2; i++) {
// //     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// //         b = prompt("Во сколько обойдется?", '');
// //     if ( (typeof (a)) === "string" && typeof(a) != null && typeof(b) != null && a != '' && a.length < 50 ) {
// //         console.log("done");
// //         break;

// //     }

// // }

// function detectDayBudget(){

//     appData.moneyPerDay = (appData.budget / 30).toFixed();
//     alert('Ежедневный бюджет:' + appData.moneyPerDay);
// }
// detectDayBudget();

// function detectLevel(){

//     if(appData.moneyPerDay < 100) {
//         console.log ("Минимальный уровень достатка");
//     }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//         console.log("Средний уровень достатка");
//     }else if (appData.moneyPerDay > 2000) {
//         console.log("Высокий уровень достатка");
//     }else {
//         console.log("Произошла ошибка")
//     }
// }
// detectLevel();
let optionalExpenses = {

}
/*
function chooseOptExpenses(){               // Функция для определения необязательных расходов
    for (let i = 1; i <= 3; i++){
        let questionOptExpenses = prompt("Статья необязательных расходов?");

        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();
*/

function chooseOptExpenses(){ 
    for (let i = 0; i < 3; i++){
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);

    }
}
chooseOptExpenses();
// function checkSavings(){
//     if (appData.savings == true) {
//         let save = +prompt("Какова сумма накоплений?"),
//             percent = +prompt("Под какой процент?");
        
//         appData.monthIncome = save/100/12*percent;
//         alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
//     }

// }
// checkSavings();

// let num = 50;

// for (let i = 1; i < 8; i++) {
//     console.log(i);
// }

// while (num < 55) {
//     console.log(num);
//     num++;
// }
 
// do{
//     console.log(num);
//     num++;
// }
// while (num < 55) {

// }
// if (num < 50) {
//    console.log('Not write')
// } else if (num > 100) {
//    console.log('Many')
// } else {
// 	console.log('Write')
// };

// (num = 50) ? console.log('Write') : console.log('Not write');

// switch (num) {
//     case num < 49:
//         console.log("Not write");
//         break;
//     case num > 100:
//         console.log("Many");
//         break;
//     case 50:
//         console.log("Write");
//         break;
//     default:
//         console.log("Something wrong");
// }





// “Введите обязательную статью расходов в этом месяце”

// let arr = ['plum.png', 'orange.png']
// console.log(arr[0]);
// let person = {
// 	name: 'John',    		//name: это ключ
// age: 25,
// isMarried:  false
// };
	
// console.log(person.name); 		// выводит John
// console.log(person['name']); 	// второй способ записи


// let answer = confirm("Are you sure?");
// console.log(answer);

// let answer = prompt("Вам есть 18?", "Да");   // promt - всплывает окно, и можно кстановить ответ по умолчанию
// console.log(typeof(answer));