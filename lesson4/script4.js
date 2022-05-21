'use strict'
//Пример 1
// function learnJS(lang, callback){
//     console.log("Я учу " + lang);
//     callback();
// }

// learnJS("JavaScript", function(){
//     console.log("Я прошел 3-й урок");
// })


//пример 2
// function learnJS(lang, callback){
//     console.log("Я учу " + lang);
//     callback();
// }
// function done(){
//     console.log("Я прошел 3-й урок");
// }
// learnJS("JavaScript", done);
    
let options = {
    width: 100,
    height: 100,
    name: "test"
};



options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool; // удаляет свойство в объекте
console.log(options);

for (let key in options){
    console.log("Свойство " + key + " Имеет значение " + options[key]);
}
console.log(Object.keys(options).length);