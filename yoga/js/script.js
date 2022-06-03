window.addEventListener("DOMContentLoaded", function(){ // это событие срабатывает кога полностью загрузилась структура

    'use strict';
    //задаем переменные
    
    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    
    function hideTabContent (a){
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show'); // эти 2 строки берут все элементы и скрывают
            tabContent[i].classList.add('hide');  // эти 2 строки берут все элементы и скрывают
        }
    }
    hideTabContent(1); //в функции в агрумент а передается 1, и соответсвенно скрываются все элементы после 1

    function showTabContent(b){
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide'); 
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener("click", function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for(let i = 0; i < tab.length; i++){
                if(target == tab[i]) {
                    hideTabContent(0); // скрываем все табы передав 0
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer 

    let deadline = '2022-08-29';

    function getTimeRemaining(endtime) {        // функция для создания новых объектов
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

        // возвращает целый объект с данными

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);  //вызываем функцию updateClock каждую секунду
            
        function updateClock() {
            let t = getTimeRemaining(endtime);      // сначала получает разницу между временем

            function addZero(num){
                        if(num <= 9) {
                            return '0' + num;
                        } else return num;
                    };

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);        // условие останавливает таймер по достижению условия
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadline);

    // Modal
    let more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close"),
        descriptionbtn = document.querySelector('.description-btn');

    more.addEventListener("click", function() {
        overlay.style.display = "block";  // принимает блочную модель (делает видимым попап)
        this.classList.add("more-splash");
        document.body.style.overflow = "hidden"; // запрещаем скролить пока открыт попап
    });
   
    close.addEventListener('click', function() {
        overlay.style.display = "none";
        more.classList.remove('more-splash');
        document.body.style.overflow = ""; // разрешаем скролить когда попап закрыт
    });

    descriptionbtn.addEventListener("click", function() {
        overlay.style.display = "block";  // принимает блочную модель
        this.classList.add("more-splash");
        document.body.style.overflow = "hidden"; // запрещаем скролить пока открыт попап
    });

    close.addEventListener('click', function() {
        overlay.style.display = "none";
        descriptionbtn.classList.remove('more-splash');
        document.body.style.overflow = ""; // разрешаем скролить когда попап закрыт
    });

    //Form wirh promise

    // let message = {
    //     loading: 'Загрузка...',
    //     success: 'Спасибо! скоро мы с вами свяжемся!',
    //     failure: 'Что-то пошло не так...'
    // };

//     let form = document.getElementsByClassName('.main-form')[0],
//         formBottom = document.getElementById('form'),
//         input = document.getElementsByTagName('input'),
//         statusMessage = document.createElement('div');

//         statusMessage.classList.add('status');

//     function sendForm(form) {
//         form.addEventListener('submit', function(event) {
//                 event.preventDefault();  // не дает странице перезагружаться по умолчанию после каждого клика по форме
//                 form.appendChild(statusMessage); 
//                 let formData = new FormData(form);

//                 function postData(data) {

//                     return new Promise (function(resolve, reject) {
//                         let request = new XMLHttpRequest();

//                         request.open('POST', 'server.php');

//                         request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

//                         request.readystatechange = function() {  
//                                 if (request.readyState < 4) {
//                                     resolve();
                                                    
//                                 } else if (request.readyState === 4) {
//                                     if( request.status === 200 && request.status < 3) {
//                                         resolve();
//                                 } 
//                                 else {
//                                         reject();
                                                    
//                                 }
//                             }
//                         }
//                         request.send(data);
//                 });
//                 } // End postData
                            
//                             function clearInput () {
//                                 for (let i = 0; i < input.length; i++) { 
//                                         input[i].value = '';
//                             }
//                         }
//                         postData(formData)
//                         .then(() => statusMessage.innerHTML = message.loading)
//                         .then(() => {
//                             thanksModal.style.display = 'block';
//                             mainModal.style.display = 'none';
//                             statusMessage.innerHTML = '';
//                         })
//                         .catch(() => statusMessage.innerHTML = message.failure)
//                         .then(clearInput)

//                     });
                    
//     }
//     sendForm(form);
//     sendForm(formBottom);
// }); 
//practice
let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
};

let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);
        let formData = new FormData(form);

        function sendRequest () {
            
            return new Promise(function(resolve, reject){
                
                

                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                request.addEventListener('readystatechange', function() {
                    if (request.readyState < 4) {
                            resolve();
                    } else if (request.readyState === 4 && request.status === 200) {
                            resolve();
                    } else {
                            reject();
                    }   
                });
                request.send(data);
            });
              // End sendRequest 
        
            } 
            function clearInput () {
                for (let i = 0; i < input.length; i++) { 
                           input[i].value = '';
        }
    }
        sendRequest(formData)
            .then (() => statusMessage.innerHTML = message.loading)
            .then (() => { 
                    thanksModal.style.display = 'block';
                    mainModal.style.display = 'none';
                    statusMessage.innerHTML = '';
            })
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInput());
                    
                    
                    
    });
});          
    
    // Form without promise
//      let form = document.querySelector('.main-form'),
//      input = form.getElementsByTagName('input'),
//      statusMessage = document.createElement('div');
    
//     form.addEventListener('submit', function(event) {
//         event.preventDefault();  // не дает странице перезагружаться по умолчанию после каждого клика по форме
//         form.appendChild(statusMessage);  // добавляем див в который поместим уведомление для user

//         let request = new XMLHttpRequest();
//         request.open('POST', 'server.php');

//           //JSON формат
//         request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        
//         let formData = new FormData(form);

//         // создаем промежуточный объект и помещаем в него данные из formData
//         let obj = {};
//         formData.forEach(function(value, key) {
//             obj[key] = value;
//         });
//         let json = JSON.stringify(obj);

//         request.send(json);

//         //JSON - end
        
//        // проверка запроса на состояние от 1 до 4
//         request.addEventListener('readystatechange', function(){  
//             if (request.readyState < 4) {
//                 statusMessage.innerHTML = message.loading;
//             } else if (request.readyState === 4 && request.status === 200) {
//                 statusMessage.innerHTML = message.success;
//             } else {
//                 statusMessage.innerHTML = message.failure;
//             }
//         });
//             for (let i = 0; i < input.length; i++){ // с помощью цикла очищаем все наши input 
//                 input[i].value = '';
//             }
        
//     });
    
// }); 