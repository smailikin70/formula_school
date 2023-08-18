const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 15,
    slidesPerView: 1,
    autoplay: 200,
    breakpoints: {
        1020: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});



new Accordion('.accordion-container');

function ChangeProgram() {
    const selectElement = document.getElementById('Program');
    const selectedProg = selectElement.value;
    alert('Вы выбрали: ' + selectedProg);
};

function ChangeLesson() {
    const selectElement = document.getElementById('Lesson');
    const selectedProg = selectElement.value;
    alert('Вы выбрали: ' + selectedProg);
};

function ChangeClass() {
    const selectElement = document.getElementById('class-age');
    const selectedProg = selectElement.value;
    alert('Вы выбрали: ' + selectedProg);
};

function ChangeAddress() {
    const selectElement = document.getElementById('address');
    const selectedProg = selectElement.value;
    alert('Вы выбрали: ' + selectedProg);
};

$(document).ready(function () {
    PopUpHide();
});

function PopUpShow() {
    $("#popup1").show();
}

function PopUpHide() {
    $("#popup1").hide();
}

let menuBtn = document.querySelector('.burger__btn');
let menu = document.querySelector('.nav__list');
menuBtn.addEventListener('click', function(){
    menu.classList.toggle('nav__active');
})


// получаем массив всех вкладок
const tabs = document.querySelectorAll(".study-program__btn");
// получаем массив всех блоков с содержимым вкладок
const contents = document.querySelectorAll(".price__display");

const contents = document.querySelectorAll(".content__display");

// запускаем цикл для каждой вкладки и добавляем на неё событие
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", ( event ) => {

        // сначала нам нужно удалить активный класс именно с вкладок
        let tabsChildren = event.target.parentElement.children;
        for (let t = 0; t < tabsChildren.length; t++) {
            tabsChildren[t].classList.remove("price__display__active");
            tabsChildren[t].classList.remove("content__display__active");
        }
        // добавляем активный класс
        tabs[i].classList.add("study-program__btn");
        // теперь нужно удалить активный класс с блоков содержимого вкладок
        let tabContentChildren = event.target.parentElement.nextElementSibling.children;
        for (let c = 0; c < tabContentChildren.length; c++) {
            tabContentChildren[c].classList.remove("study-program__btn__active");
        }
        // добавляем активный класс
        contents[i].classList.add("study-program__btn__active");

    });
}