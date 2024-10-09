/*
Задание: Реализация интерактивного отсчёта запуска ракеты

Цель задания: Написать код для обработки событий нажатия на кнопки "Старт" и "Отмена", реализуя обратный отсчёт с помощью JavaScript.

Задача:

1. Добавить обработчик событий для кнопки "Старт":

- При нажатии на кнопку "Старт" должен начаться обратный отсчёт с 3 до 1. Значение счётчика должно отображаться в элементе countdownDisplay. Цифра 3 должна отобразиться немедленно.
- Каждую секунду значение счётчика должно уменьшаться на 1.
- Когда счётчик достигнет 0, вместо 0 должен отображаться эмодзи ракеты "🚀" и таймер должен быть остановлен. Пользователь видит: 3 -> 2 -> 1 -> 🚀


2. Добавить обработчик событий для кнопки "Отмена":

- При нажатии на кнопку "Отмена" таймер должен быть остановлен
- В элементе отображения счётчика (countdownDisplay) должно появиться сообщение "Отменено".
- Отмена таймера возможна только во время его работы
- После отмены таймера возможен повторный запуск ракеты

Обратите внимание на корректность работы таймера: повторное нажатие на "Старт" не должно приводить к нескольким одновременно работающим таймерам.

Подсказки:
- 🧙‍♂️ Для выполнения этого задания нужно познакомиться с браузерными функциями setInterval (https://doka.guide/js/setinterval/) и clearInterval(https://doka.guide/js/clearinterval/). Они очень похоже на setTimeout и clearTimeout.
 */

const startButton = document.getElementById('start')
const cancelButton = document.getElementById('cancel')
const countdownDisplay = document.getElementById('countdown')

let isTimerStarted = false
let timerId

startButton.addEventListener('click', () => {
  let counter = 3

  // your code
})

cancelButton.addEventListener('click', () => {
  // your code
})


// const startButton = document.getElementById('start')
// const cancelButton = document.getElementById('cancel')
// const countdownDisplay = document.getElementById('countdown')

// let isTimerStarted = false
// let timerId

// startButton.addEventListener('click', () => {
//   let counter = 3
//   if (!isTimerStarted) {
//     countdownDisplay.textContent = '3';
//     isTimerStarted = true;
//     startCount();
// }
//   // your code
// })

// cancelButton.addEventListener('click', () => {
//   // your code if (isTimerStarted) {
//     clearInterval(timerId);
//     countdownDisplay.textContent = 'Отменено';
//     isTimerStarted = false;
// })
// function startCount(){
//   let counter = 3;
//   timerId = setInterval(() =>{
//     if ( counter <= 0){
//       clearInterval(timerId)
//       countdownDisplay.textContent = '🚀'
//     } else{ 
//       countdownDisplay.textContent = counter--
//     }
//   }, 1000)

// }