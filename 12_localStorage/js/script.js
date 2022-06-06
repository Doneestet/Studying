// localStorage.setItem("number", 1);  // создаем пару + ключ

// console.log(localStorage.getItem('number')); // получаем значение
 
// localStorage.removeItem('number'); // удалаяет 

// localStorage.clear();   //  полностью очищает хранилище

window.addEventListener('DOMContentLoaded', function() {

    let checkbox = document.getElementById('rememberMe'),
        change = document.getElementById('change'),
        form = document.getElementsByTagName('form')[0];

    if (localStorage.getItem('isChecked') === 'true'){
        checkbox.checked = true;
    }

    if(localStorage.getItem('bg') === 'changed'){
        form.style.background = '#FF4677';
    }

    checkbox.addEventListener('click', function() {
        localStorage.setItem('isChecked', true);
    });

    change.addEventListener('click', function(){
        localStorage.setItem('bg', 'changed');
        form.style.background = '#FF4677';
    });

    let person = {
        name: 'Alex',
        age: 25,
        tech: ['mobile', 'notebook']
    }

    let serializedPerson = JSON.stringify(person);
    localStorage.setItem('Alex', serializedPerson);

    console.log(JSON.parse(localStorage.getItem('Alex')));
});

