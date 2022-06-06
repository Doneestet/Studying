let btn = document.querySelectorAll("button"),
    wrap = document.querySelector(".wrapper"),
    link = document.querySelector("a");



// btn[0].onclick = function() {
//     alert('вы нажали 1 кнопку');
// };
// btn[0].addEventListener("click", function (event) {
//     console.log(event);
//     let target = event.target;
//     target.style.display = "none";
//     console.log("Произошло событие: " + event.type + " на элементе " + event.target); // e.type - тип события ; e.target - цель события
// });

link.addEventListener("click", function(event) {
    event.preventDefault();                             // отменяет действие - например переход по ссылке
    console.log("Произошло событие: " + event.type + " на элементе " + event.target);
});

btn.forEach(function(item){  // используем только item поскольку нам нужно только перебрать массив
    item.addEventListener("mouseleave", function(){
        console.log('вышли');
    });

});
// btn.addEventListener("mouseenter", function (event) {
//     console.log("Произошло событие: " + event.type + " на элементе " + event.target);
// });