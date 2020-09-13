let credits = 23580;
const pricePerDroid = 3000;
const quantity = prompt('Введите количество дронов.');
let totalPrice;
if (quantity === null) {
  console.log('Отменено пользователем!');
} else if (Number(quantity) * pricePerDroid > credits) {
  totalPrice = Number(quantity) * pricePerDroid;
  console.log('Недостаточно средств на счету!');
} else {
  totalPrice = Number(quantity) * pricePerDroid;
  console.log(
    `Вы купили ${quantity} дроидов, на счету осталось ${(credits -= totalPrice)} кредитов.`,
  );
}
