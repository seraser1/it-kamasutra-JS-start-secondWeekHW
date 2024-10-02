/*
* Напишите функцию truncate, которая принимает строку и максимальную длину.

* Если длина строки превышает указанное количество символов, функция должна обрезать строку до этой длины и добавлять в конец многоточие (...).
* В противном случае функция должна возвращать исходную строку.

* Пример работы функции:
* truncate("Вот, что мне действительно нравится в этом", 20) // Ожидаемый результат: "Вот, что мне действи..."
* truncate("Короткая строка", 20) // Ожидаемый результат: "Короткая строка"
*/

const truncate = (str, maxLength) => {
  if (maxLength >= str.length) return str
  return str.slice(0, maxLength) + '...';
}


// function truncate(str, maxLength) {
//   if (str.length > maxLength) return str.slice(0, maxLength) + '...';
//   else return str;
//   }
  // console.log(truncate("Вот, что мне так", 20));
  
  
  
  // your code

