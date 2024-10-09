/*
  Изучите файл index.html (секцию "Урок 8"). Разметка уже написано - нужно добавить только js-код.

  Функционал магазина питомцев почти готов. Не хватает возможности добавлять питомцев в корзину.
  Ваша задача написать обработчик события, который будет добавлять питомцев в корзину.

  1. При клике на кнопку с питомцем, id питомца должен добавляться в массив cart.
  2. После добавления питомца в корзину, необходимо вызвать функцию updateCartDisplay (она обновит отображение корзины).
  3. В корзину можно добавить не более 3 питомцев. Если пользователь пытается добавить больше, то в messageBox должен появится текст: 'Вы не можете добавить более 3 питомцев'

  ❕❕❕ Представленный в задании код не следует изменять. Требуется только дописать обработчик события.

  🧙 Подсказка: используй делегирование - будет достаточно одного обработчика событий на контейнере
  🧙 Подсказка: если пользователь кликнет по кнопке с питомцев, id питомца можно будет получить из объекта события (event.target.id)
*/

const PETS = [
  { id: 'cat', title: '🐱' },
  { id: 'dog', title: '🐶' },
  { id: 'parrot', title: '🦜' },
  { id: 'fish', title: '🐠' },
  { id: 'spider', title: '🕷' },
  { id: 'snake', title: '🐍' },
  { id: 'hamster', title: '🐹' },
  { id: 'turtle', title: '🐢' },
  { id: 'chinchilla', title: '🦇' },
  { id: 'hedgehog', title: '🦔' },
  { id: 'rat', title: '🐀' },
  { id: 'frog', title: '🐸' },
]

const cart = []

// Получаем контейнер, в который будем добавлять кнопки
const petShop = document.querySelector('.pet-shop')
const cartList = document.getElementById('cart-list')
const messageBox = document.getElementById('message-box')
const clearCartButton = document.getElementById('clear-cart-button')

// Рендерим кнопки для питомцев
for (let i = 0; i < PETS.length; i++) {
  const pet = PETS[i]
  // Создаем элемент кнопки
  const petButtonElement = document.createElement('button')
  // Добавляем класс 'pet' к кнопке
  petButtonElement.classList.add('pet')
  // Устанавливаем id кнопки
  petButtonElement.id = pet.id
  // Устанавливаем текст внутри кнопки
  petButtonElement.textContent = pet.title

  // Добавляем кнопку в контейнер
  petShop.append(petButtonElement)
}

// Обновляем отображение корзины
function updateCartDisplay() {
  cartList.innerHTML = ''

  for (let i = 0; i < cart.length; i++) {
    const petId = cart[i]
    const pet = PETS.find((item) => item.id === petId)
    const petSpanElement = document.createElement('li')
    petSpanElement.classList.add('pet')
    petSpanElement.textContent = pet.title
    cartList.append(petSpanElement)
  }
}

clearCartButton.addEventListener('click', function () {
  cart.length = 0
  updateCartDisplay()
})

// Твой код:



petShop.addEventListener('click', function (event) {
//  const target = event.target;

  // Проверяем, что клик был по кнопке с питомцем
  if (event.target.classList.contains('pet')) {
    const petId = event.target.id;

    // Проверяем, что в корзине не более 3 питомцев
    if (cart.length < 3) {
      // Добавляем питомца в корзину
      cart.push(petId);
      // Обновляем отображение корзины
      updateCartDisplay();
    } else {
      // Показываем сообщение, что нельзя добавить более 3 питомцев
      messageBox.textContent = 'Вы не можете добавить более 3 питомцев';
    }
  }
});
