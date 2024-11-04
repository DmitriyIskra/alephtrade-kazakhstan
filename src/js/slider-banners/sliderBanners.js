export default function sliderBanners(Swiper, slider, modules) {
    const [Navigation, Autoplay] = modules;

    new Swiper(slider, {
        modules: [Navigation, Autoplay],
        loop: true,
        navigation: {
            nextEl: '.slider-banners__button-next',
            prevEl: '.slider-banners__button-prev',
        },
        autoplay: {
            delay: 3000,
        },
        speed: 1500,
    });
}