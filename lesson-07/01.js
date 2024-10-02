/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

// function capitalizeWords() {
  
// }

// function capitalizeWords(str) {
  
// } 

function capitalizeWords(str) {
  return str.split(" ") // Разбиваем строку на массив слов
            .map(word => 
                // Преобразуем каждое слово
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(' '); // Объединяем слова обратно в строку
}

// console.log(capitalizeWords("это пример строки")); // "Это Пример Строки"
// console.log(capitalizeWords("здесь еще один пример")); // "Здесь Еще Один Пример"
// console.log(capitalizeWords("ПРИМЕР ЗНАКОВ ПРЕПИНАНИЯ!")); // "Пример Знаков Препинания!"
