/*
В этом задании вам предстоит разработать интерактивный слайдер, который позволит пользователю переключаться между созданными нейросетью изображениями веб-технологий.
Изучите файл index.html. В этом задании надо будет работать с секцией "Урок 6". Разметка уже написано - нужно добавить только js-код.

Задание:
- Добавьте функциональность кнопкам "prev" и "next", чтобы при их нажатии изображение в теге `<img>` менялось на предыдущее или следующее
- Обеспечьте циклическое переключение изображений: после последнего изображения следует первое, и наоборот.

Адреса изображений находятся в массиве WEB_TECH_IMAGE
Первоначально отображается первое изображение из WEB_TECH_IMAGE

🧙‍♂️ Совет: обратите внимание на управление индексом текущего изображения — это ключ к успешному переключению изображений.
*/

const WEB_TECH_IMAGES = [
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg',
]


const prev = document.getElementById("prev-button")
const next = document.getElementById("next-button")
// console.log(prev);
let currentIndex = 0;
function updateImage() {
  const imageElement = document.getElementById("web-tech-image");
  imageElement.src = WEB_TECH_IMAGES[currentIndex];
}
next.addEventListener('click',function(){
  currentIndex = (currentIndex + 1) % WEB_TECH_IMAGES.length;
  updateImage();
});

prev.addEventListener('click',function(){
  currentIndex = (currentIndex - 1 + WEB_TECH_IMAGES.length) % WEB_TECH_IMAGES.length;
  updateImage();
});

// const image = document.querySelector('img');
// const prevButton = document.getElementById('prev-button');
// const nextButton = document.getElementById('next-button');

// let currentImageIndex = 0;

// function showImage() {
//   image.src = WEB_TECH_IMAGES[currentImageIndex];
// }

// function nextImage() {
//   currentImageIndex = (currentImageIndex + 1) % WEB_TECH_IMAGES.length;
//   showImage();
// }

// function prevImage() {
//   currentImageIndex = (currentImageIndex - 1 + WEB_TECH_IMAGES.length) % WEB_TECH_IMAGES.length;
//   showImage();
// }

// nextButton.addEventListener('click', nextImage);
// prevButton.addEventListener('click', prevImage);

// showImage()





















