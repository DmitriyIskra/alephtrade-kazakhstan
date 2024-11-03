import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import sliderBrands from "./slider-brands/sliderBrands";

// Слайдер бренды
const brands = document.querySelector('.brands');
if(brands) {
    sliderBrands(Swiper, brands, [Autoplay]);
}