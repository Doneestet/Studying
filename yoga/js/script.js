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

    let deadline = '2022-05-29';

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
});

