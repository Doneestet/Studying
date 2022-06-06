
// setTimeout(sayHello, 3000);
// function sayHello(){
//     alert('Hello');
// }

// let timerId = setTimeout(sayHello, 3000); // занесли функцию в перменную 
// clearTimeout(timerId);                     // убрали время

// let timerId = setInterval(sayHello, 3000); // повторяет событие интервалами
// // clearTimeout(timerId);  

// function sayHello(){
//     alert('Hello');
// }

// let timerId = setTimeout(function log(){   // рекурсивный вызов функции setTimeout; Работает как setInterval
//     console.log("Hello");
//     setTimeout(log, 2000);
// });

let btn1 = document.querySelector(".btn1"),
    redbox = document.querySelector('.redbox'),
    bluebox = document.querySelector('.bluebox');

// redbox.style.backgroundColor = "red";
// redbox.style.borderWidth = "10px";
// redbox.style.borderColor = "black";



redbox.style.width = "300px";
redbox.style.height = "300px";

bluebox.style.backgroundColor = "blue";
bluebox.style.width = "50px";
bluebox.style.height = "50px";


function myAnimation(){
    let pos = 0;

    let id = setInterval(frame, 10);

    function frame(){
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            bluebox.style.top = pos + 'px';
            bluebox.style.left = pos + "px";
        }
    }
    
}

btn1.addEventListener("click", myAnimation);


let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(e){ 
    if(e.target && e.target.matches('button.first')) { 
        console.log("Helo");
    }
});

