/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

// function capitalizeWords(str) {
//   const words  = str.split(' ');
//   const result = [];
//   for (let i = 0; i < words.length; i++) {
//     // const word = words[i];
//     const resEl = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
//     result.push(resEl)
//   }
//   return result.join(' ')
// } 

// function capitalizeWords(string) {
//   let str = ''
//   str += string[0].toUpperCase()
//   for (let i = 1; i < string.length; i++) {
//     if(string[i - 1] === ' ') str += string[i].toUpperCase()
//       else str += string[i]
//   }
//   return str
// } 

function capitalizeWords(string) {
  let str = '';
  for (let i = 0; i < string.length; i++) {
    if(i === 0 || string[i - 1] === ' ') str += string[i].toUpperCase()
      else str += string[i]
  }
  return str
} 



// function capitalizeWords(str) {
//   return str.split(" ") // Разбиваем строку на массив слов
//             .map(word => 
//                 // Преобразуем каждое слово
//                 word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
//             )
//             .join(' '); // Объединяем слова обратно в строку
// }

// console.log(capitalizeWords("Это пример строки. Здесь много слов!")); // "Это Пример Строки"
// console.log(capitalizeWords("это пример строки")); // "Это Пример Строки"
// console.log(capitalizeWords("здесь еще один пример")); // "Здесь Еще Один Пример"
// console.log(capitalizeWords("ПРИМЕР ЗНАКОВ ПРЕПИНАНИЯ!")); // "Пример Знаков Препинания!"
