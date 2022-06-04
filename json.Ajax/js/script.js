// let options = {
//     width: 1366,
//     height: 768,
//     background: 'red',
//     font: {
//         size: "16px",
//         color: "#fff"
//     }
// };

// console.log(JSON.stringify(options)); // преобразует данные в JSON формат для загрузки на сервер

// console.log(JSON.parse(JSON.stringify(options)));  // преобразует данные с сервера для работы

//         // status       200, 404 ...
//         // statusText   ok or not found
//         // responseText / response  (товары или что хочет вам послать разработчик)
//         // readyState  - содержит текущее состояние запроса


// let inputUah = document.getElementById('uah'),
//     inputUsd = document.getElementById('usd');

//     inputUah.addEventListener('input', () => {

//         function catchData() {
    
//             return new Promise(function(resolve, reject){
//                 let request = new XMLHttpRequest();
//                 request.open("GET", "current.json"); //0 - Клиент создан. Метод open() ещё не вызван.
                
//                 request.setRequestHeader('Content-type', 'application/json; charset=utf-8');  //1 - Вызван метод open(). В этом состоянии можно добавить заголовки через метод setRequestHeader(); вызов метода send() отправит запрос.
//                 request.send(); // 2 - Вызван метод send(), получены заголовки и код ответа (200, 404, 501 и проч.).
            
//                 request.onload = function() {   
//                     if(request.readyState === 4 && request.status == 200) {
//                                 resolve(this.response); 
//                             } else {
//                                 reject();
                            
//                             }
//                 };
//             });
//         }
    
//         catchData()
//         .then(response => {
//             console.log(response);
//             let data = JSON.parse(response);
//             inputUsd.value = inputUah.value / data.usd;
//         })
//         .then(() => console.log(5000))
//         .catch(() => inputUsd.value = "Что-то пошло не так")
    
    
//     });

// practice
let obj = {
    loading: 'Загрузка',
    success: 'Все гуд',
    faillure: 'Что-то пошло не так'
}

let inputUah = document.getElementById('uah'),
    inputUsd = document.getElementById('usd');

    inputUah.addEventListener('input', function(){
        function sendRespond() {
            return new Promise(function(resolve, reject) {
                let request = new XMLHttpRequest();

                request.open('GET' ,'json1/current.json');
                request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                request.send();

                request.onload = function() {
                    if(request.readyState === 4 && request.status == 200){
                        resolve(request.response);
                    } else {
                        return reject()
                    }
                }
            })
        }
        sendRespond()
            .then(response => {
            console.log(response);
            let data = JSON.parse(response);
            inputUsd.value = inputUah.value / data.usd;
            })
            .catch(() => inputUsd.value = "Что-то пошло не так")
            .then(() =>{
                inputUah.forEach((item) => item.style.display = 'none' )
            })
    });

//     inputUah.addEventListener('input', function(){
//     function sendRespond () {
//         return new Promise(function(resolve, reject){
//             let request = new XMLHttpRequest();

//             request.open('GET', 'json1/current.json');
//             request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
//             request.send();

//             request.onload = function(){
//                 if(request.readyState === 4 && request.status == 200){
//                     resolve(request.response);
//                 } else {
//                     return reject();
//                 }
//             };
//         });
//     }
//     sendRespond()
//         .then(response => {
//             // console.log(response);
//             let data = JSON.parse(response);
//             inputUsd.value = inputUah.value / data.usd;
//         })
//         // .then(() => console.log(5000))
//         .catch(() => inputUsd.value = "Что-то пошло не так")

        
    
// });

// without promise

// let inputUah = document.getElementById('uah'),
//     inputUsd = document.getElementById('usd');
//     const catchData = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=5';

// inputUah.addEventListener('input', () => {
//     let request = new XMLHttpRequest(); // это главный объект для рабоыт с react запросами

//     request.open("GET", catchData);
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // настройка http запросов
//     request.send();

//     request.addEventListener('readystatechange', function() {
//         if(request.readyState === 4 && request.status == 200){

//             let data = JSON.parse(request.response);
//             inputUsd.value = inputUah.value / data.usd;

//         } else {
//             inputUsd.value = " Что-то пошло не так!";
//         }
//     });
// });


//     // request.open(method, url, async, login, pass); // open можете принимать 5 аргументов
//     // method - 'GET'(получаем) или 'POST'(отправляет инфо )
//     // async - true (по умолчанию) или false; можем взаимодейстовать с сайтом в процессе или нет как alert
