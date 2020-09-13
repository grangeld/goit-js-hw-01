let input;
let total = 0;

while ((input = prompt('Введите число')) !== null) {
  if (!isNaN(Number(input))) {
    total += Number(input);
  } else alert('Было введено не число, попробуйте еще раз');
}

alert(`Общая сумма чисел равна ${total}`);
