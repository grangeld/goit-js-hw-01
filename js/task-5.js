let countryName = prompt('Введите название страны');
let isСountryInList = true;
let price;

countryName = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();

switch (countryName) {
  case 'Китай':
    price = 100;
    break;
  case 'Чили':
    price = 250;
    break;
  case 'Австралия':
    price = 170;
    break;
  case 'Индия':
    price = 80;
    break;
  case 'Ямайка':
    price = 120;
    break;
  default:
    isСountryInList = false;
}

isСountryInList
  ? alert(`Доставка в ${countryName} будет стоить ${price} кредитов`)
  : alert('В вашей стране доставка не доступна');
