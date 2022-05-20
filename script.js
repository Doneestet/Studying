'use strict';

let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let a1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a2 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a3 = prompt('Во сколько обойдется?', ''),
    a4 = prompt('Во сколько обойдется?', '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.money/30);
// console.log(appData);

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