const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    slidesPerView: 2,
    autoplay: 200,
    autoHeight: false,

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