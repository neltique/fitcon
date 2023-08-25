const shop_swiper = new Swiper(".shop_slide", {
    slidesPerView: 3,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
    }
});


const mb_swiper = new Swiper(".main_banner", {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    loop: true,

});
