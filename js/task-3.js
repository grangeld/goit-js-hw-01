const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

// console.log(message);
const enteredPassword = prompt('Введите пароль');

if (enteredPassword === null) {
  message = 'Отменено пользователем!';
} else if (ADMIN_PASSWORD === enteredPassword) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
