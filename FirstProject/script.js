'use strict';

let appData = {
	budget: prompt("Ваш бюджет на месяц?"),
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: prompt('Введите дату в формате YYYY-MM-DD'),
	savings: false
};

for (let i = 0; i < 2; i++) {
	let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
		a2 = prompt("Во сколько обойдется?", '');

	appData.expenses.a1 = a2;
}

alert(appData.budget / 30);