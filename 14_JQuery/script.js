$(document).ready(function() {  // аналог DOMloader

    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });

    $('list-item:eq(2)').on('click', function() {
        $('.image:even').fadeToggle('slow');   // even получаем четную картинку
    });

    $('.list-item:eq(4').on('click', function() { 
        $('.image:odd').animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            }, 3000
        );
    });
});

//<--------все это в новой версии js уже есть и можно заменить Jquery------>
// document.querySelectorAll('.list-item').forEach();
// .classlist
// .addEventListener
// $.ajax - fetch
// animations


