// 1 Задаем событие обработки сайта , лучше использовать  DOMLoader
// window.addEventListener("DOMContentLoaded", function(){
//     'use strict';
//     // Задаем переменные

//     let tab = document.querySelectorAll(".info-header-tab"),
//         info = document.querySelector("info-header"),
//         tabContent = document.querySelectorAll("info-tabcontent");

//     //1 функция скрыть все табы после первого
//     function hideTabContent(a) {
//         for(let i = 0; i < tabContent.length; i++){
//             tabContent[i].classList.remove("show");
//             tabContent[i].classList.add('hide');
//         }
//     }
//     hideTabContent(1); // вызываю функцию с 1 элемента

//     function showTabContent(b) {
//         if(tabContent[b].classList.contains('hide')){
//             tabContent[b].classList.remove("hide");
//             tabContent[b].classList.add('show');
//          }
//     }
//     info.addEventListener('click', function(event){
//         let target = event.target;
//         if(target && event.target.classList.contains('info-header-tab')){
//             for(let i = 0; i < tab.length; i++){
//                 if(target == tab[i]){
//                     hideTabContent(0);
//                     showTabContent(i);
//                     break;
//                 }
//             }
//         }
//     });
// });













window.addEventListener("DOMContentLoaded", function(){ // это событие срабатывает кога полностью загрузилась структура

    'use strict';
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
}); 