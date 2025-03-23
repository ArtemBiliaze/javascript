// Створіть об'єкт, який представляє книгу з властивостями title, author та year.

const book = {
  title: 'Artem Biliaze',
  author: 'My way to IT',
  year: 2030
}

console.log(book);

//Додайте нову властивість genre до об'єкта книги.

book.genge = 'autobiography';

console.log(book);

//Видаліть властивість year з об'єкта книги.

delete book.year;

console.log(book);