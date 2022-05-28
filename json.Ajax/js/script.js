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


let inputUah = document.getElementById('uah'),
    inputUsd = document.getElementById('usd');

inputUah.addEventListener('input', () => {
    let request = new XMLHttpRequest(); // это главный объект для рабоыт с react запросами

    // request.open(method, url, async, login, pass); // open можете принимать 5 аргументов
    // method - 'GET'(получаем) или 'POST'(отправляет инфо )
    //async - true (по умолчанию) или false; можем взаимодейстовать с сайтом в процессе или нет как alert
    request.open("GET", 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // настройка http запросов
    request.send();


    request.addEventListener('readystatechange', function() {
        if(request.readyState === 4 && request.status == 200){
            let data = JSON.parse(request.response);

            inputUsd.value = inputUah.value / data.usd;
        } else {
            inputUsd.value = " Что-то пошло не так!";
        }
    });
});

