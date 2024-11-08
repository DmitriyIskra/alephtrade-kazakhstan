import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Слайдер с брендами
import sliderBrands from "./slider-brands/sliderBrands";
// Слайдер с брендами
import sliderBanners from "./slider-banners/sliderBanners";
// Бургер меню
import ControllBurger from "./burger-menu/ControllBurger";
import RedrawBurger from "./burger-menu/RedrawBurger";

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