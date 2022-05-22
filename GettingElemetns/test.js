let box = document.getElementById('box'), // получаем элемент по id
    btn = document.getElementsByTagName('button'), //получаем елементы по тэгам
    circle = document.getElementsByClassName('circle'), //получаем елементы по классу 
    heart = document.querySelectorAll('.heart'), // получу все элементы
    oneHeart = document.querySelector('.heart'); // получу первый или указанный элемент
    wrapper = document.querySelector('.heart');

// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.log(circle[2]);
// console.log(heart[1]);
// console.log(oneHeart);

// box.style.backgroundColor = "blue";  // обращаемся к эл. и меняеи его цвет
// btn[1].style.borderRadius = "100%"; // обр. к 2 эл. и меняем его форму

// circle[0].style.backgroundColor = 'red';   // 1 эл. меняем цвет
// circle[1].style.backgroundColor = 'yellow';
// circle[2].style.backgroundColor = 'green';

// 

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, massiv){   // item - элемент, можно назвать как угодно; i - номер элемента; massiv - весь массив элементов, ожно назвать как угодно
//     item.style.backgroundColor = 'blue';
// });

let div = document.createElement('div'),        // создаем эл. div
    text = document.createTextNode('Тут был я ');  //  создаем текст 

div.classList.add('black'); // classList - метод с разными свойствами. Добавляем черный прямоуг.

// document.body.appendChild((div));   // добавляем эл. в конец body в html
// wrapper.appendChild(div);   // добавляем эл. в конец обертки wrapper в html

div.innerHTML = "<h1>Hello world!</h1>"; // добавляет внутрь HTML любые данные;
div.textContent = 'hello world'; // добавляет текст на страницу. безопасный способ взаимодействия

document.body.insertBefore(div, circle[0]); // вставить эл. перед другим эл.
document.body.removeChild(circle[1]);   // удалить элемент
wrapper.removeChild(heart[1]);  

document.body.replaceChild(btn[1], circle[1]);

console.log(div);

