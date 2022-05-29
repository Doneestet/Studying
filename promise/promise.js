
let drink = 1;

function shoot (arrow){
    console.log("Вы сделали выстрел...");

    // создаем наш promise
    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            Math.random() > .5 ? resolve({}) : reject('Вы промахнулись');
        }, 3000);
    });
    
    setTimeout(function(){
        Math.random() > .5 ? headshot({}) : fail('Вы промахнулись');
    }, 3000);
};

function win() {
    console.log('Вы победили');
    (drink == 1) ? buyBeer() : giveMoney();
}

function byBeer() {
    console.log('КУпили пиво');
}

function giveMoney() {
    console.log('Дали денег');
}

function loose() {
    console.log('Вы проиграли!');
}

shoot({})
    .then(mark => console.log('Вы попали в цель'))
    .then(win)
    .then(loose)
    
    