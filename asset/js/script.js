const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    slidesPerView: 1.8,
    centeredSlides: true,
    freeMode: true,
    autoHeight: true,
});

new Accordion('.accordion-container');
