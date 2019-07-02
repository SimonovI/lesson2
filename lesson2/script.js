let  money = 50000,
    income = 'фриланс',
    addExpenses = 'СОДЕРЖАНИЕ ПК, ХОСТИНГ, СОФТ',
    deposit = true,
    mission = 100000,
    //budgetDay = money / 30,
    period = 2;
budgetDay = (money / 30);
console.log(typeof money,typeof income,typeof deposit);
console.log(income.length);
console.log(period + " " + "Месяца", mission + " " + 'рублей');
console.log(addExpenses.toLowerCase().split(", "));
//money / 30 = budgetDay;
console.log(money % 30);