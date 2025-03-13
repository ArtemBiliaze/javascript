//Створіть масив з трьох імен. Додайте нове ім'я до кінця масиву і виведіть його.
const names = ["Artem", "Yurij", "Ivan"];
names.push("Sergey");
console.log(names[names.length-1]);

names[names.length] = "Petro";
console.log(names[names.length-1]);

//Видаліть перший елемент масиву і виведіть його.

let item1 = names.shift();
console.log(item1);

//Знайдіть індекс елемента зі значенням "John" в масиві ["Mike", "John", "Sara"].

const nameArr = ["Mike", "John", "Sara"];
let item2 = nameArr.indexOf("John");
console.log(item2);
console.log(nameArr[item2]);
