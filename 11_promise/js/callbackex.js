
let drink = 1;

function shoot (arrow, headshot, fail){
    console.log("Вы сделали выстрел...");

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

shoot({},
    function(mark){
        console.log('Вы попали в цель!');
        win(mark, byBeer, giveMoney);
    },
    function(miss){
        console.error(miss);
        loose()
    }
    )