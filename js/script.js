const swiper = new Swiper('.swiper', {

    direction: 'horizontal',

    loop: true,

    autoplay: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoHeight: true,

    slidesPerView: 1,

    centeredSlides: true,

    effect: 'coverflow',

    coverflowEffect: {
        depth: 10,
        rotate: 20,
    },
});