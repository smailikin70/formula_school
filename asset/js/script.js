const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    slidesPerView: 2,
    autoplay: 200,
    // centeredSlides: true,
    // freeMode: true,
    autoHeight: true,
});

new Accordion('.accordion-container');

function ChangeProg() {
    const selectElement = document.getElementById('Prog');
    const selectedProg = selectElement.value;
    alert('Вы выбрали: ' + selectedProg);
}