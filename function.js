//Напишіть функцію, яка приймає два числа і повертає їх суму.

function sumOfNumber (a, b) {
  let c;
  c = a + b;
  return c;
}

console.log(sumOfNumber(11, 38));

//Напишіть функцію, яка приймає рядок і повертає його в верхньому регістрі.

function stringToUpperCase (a) {
  return a.toUpperCase();
}

console.log(stringToUpperCase('qwerty'));

//Напишіть функцію, яка приймає масив чисел і повертає новий масив з квадратами цих чисел.

function squareArr (a) {
  const newArr = a.flatMap(x => [x * 2]);
  return newArr;
}

const arrOfNum = [2, 6, 9, 7];
console.log(squareArr(arrOfNum));