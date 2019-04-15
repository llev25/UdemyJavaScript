'use strict';

let appData = {
	budget: +prompt("Ваш бюджет на месяц?"),
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: prompt('Введите дату в формате YYYY-MM-DD'),
	savings: false
};

for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
		b = prompt("Во сколько обойдется?", "");

	if (typeof (a) === 'string' && a != null && b != null &&
		a != '' && b != '' && a.length < 50 && b.length < 20) {

		console.log("done");
		appData.expenses[a] = b;
	} else i--;
}

/*	While
let i = 0;
while (i < 0) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
		b = prompt("Во сколько обойдется?", "");

	if (typeof (a) === 'string' && a != null && b != null &&
		a != '' && b != '' && a.length < 50 && b.length < 20) {

		console.log("done");
		appData.expenses[a] = b;
	} else i--;
	i++;
} */

/*	DoWhile
let i = 0;
do {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
		b = prompt("Во сколько обойдется?", "");

	if (typeof (a) === 'string' && a != null && b != null &&
		a != '' && b != '' && a.length < 50 && b.length < 20) {

		console.log("done");
		appData.expenses[a] = b;
	} else i--;
	i++;
} while (i < 0) */

appData.moneyPerDay = appData.budget / 30;


alert("Бюджет на день составляет " + appData.moneyPerDay + "руб.");


if (appData.moneyPerDay < 100) {
	console.log("Минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
	console.log("Высокий уровень достатка!");
} else {
	console.log("Произошла ошибка");
}