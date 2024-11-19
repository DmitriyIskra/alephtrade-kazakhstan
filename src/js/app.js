import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Слайдер с брендами
import sliderBrands from "./slider-brands/sliderBrands";
// Слайдер с брендами
import sliderBanners from "./slider-banners/sliderBanners";
// Бургер меню
import ControllBurger from "./burger-menu/ControllBurger";
import RedrawBurger from "./burger-menu/RedrawBurger";

// Форма обратной связи
import ControllCallback from "./callback/ControllCallback";
import RedrawCallback from "./callback/RedrawCallback";
import ApiCallback from "./callback/ApiCallback";


// Слайдер бренды
const brands = document.querySelector('.brands');
if(brands) sliderBrands(Swiper, brands, [Autoplay]);

// Слайдер баннеры
const banners = document.querySelector('.slider-banners');
if(banners) sliderBanners(Swiper, banners, [Navigation, Autoplay]);

const navMobile = document.querySelector('.nav__mobile-list');
if(navMobile) {
    const switcher = document.querySelector('.nav__switcher-checkbox');
    const boxes = navMobile.querySelectorAll('input');

    const redraw = new RedrawBurger(navMobile, switcher, boxes);
    const controll = new ControllBurger(redraw);
    controll.init();
}

// Форма обратной связи
const form = document.querySelector('.callback__form');
if(form) {
    const redraw = new RedrawCallback(form);
    const api = new ApiCallback();
    const controll = new ControllCallback(redraw, api);
    controll.init();
}

// const form = document.querySelector('.footer__wr-subscription > form');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const data = new FormData(form);
//     (async () => {
//         try {
//             const response = await fetch('https://sendmail/sendmail.php', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type' : 'application/json',
//                 },
//                 body: data
//             });

//             const result = await response.json();
//             console.log(result);
//         } catch (error) {
//             console.log(error)
//         }
//     })()
// })