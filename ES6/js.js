// let name = "ivan",
//     age = 30,
//     email = "ex@gmail.com";

// document.write(`текст ${name} ${age} что-то тут ${email}`);


function makeArray() {
    var item = [];

    for (var i = 0;i < 10; i++) {  // var i - будет использоваться одна на весь цыкл
        var item = function () {
            console.log(i);
        };
        items.push(item);
    }
    return items;
}

var arr = makeArray();

arr[1]();
arr[7]();
arr[1]();



let fun = () => {
    console.log(this);  // получим window
};

fun();

let obj = {
    number: 5,
    sayNumber: function () {
        let say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let show = () => {      // контекст вызова берет у родителя выше
        console.log(this);
    }
    show();
});


function calcOrDouble(number, basis = 2) {  // если базиз не задан, возьмет 2 по умолчанию
    console.log(number * basis);
}
calcOrDouble(3, 5);
calcOrDouble(6);


class Rectangle {
    constructor(height, width){
        this.width = width;
        this.height = height;
    }
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);

console.log(square.calcArea());


let video = ['youtube', 'rutube', 'vimeo'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook']; // разворачивает массивы video и blogs внутри массива internet
    
console.log(internet);