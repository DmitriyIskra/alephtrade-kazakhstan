export default function sliderBrands(Swiper, slider, modules) {
    const [Autoplay] = modules;

    new Swiper(slider, {
        modules: [Autoplay],
        slidesPerView: 7,

        loop: true,
        autoplay: {
            delay: 3000,
        },
        speed: 1500,
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 4,
            },
            // when window width is >= 961px
            640: {
              slidesPerView: 7,
            }
        }
      });
}