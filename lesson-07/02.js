/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

// function isNumeric(str) {
//   str = str.trim();
//   if(str === '') return false
//   return !isNaN(Number(str));
//   // return typeof str
//   // your code
// }





function isNumeric(str) {
  if((str === ' ') || (str === '')) return false;
  // return !isNaN(str);
  return isFinite(str);
  // your code
}


