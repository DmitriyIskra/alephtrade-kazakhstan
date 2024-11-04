import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import sliderBrands from "./slider-brands/sliderBrands";
import sliderBanners from "./slider-banners/sliderBanners";

// Слайдер бренды
const brands = document.querySelector('.brands');
if(brands) sliderBrands(Swiper, brands, [Autoplay]);


const banners = document.querySelector('.slider-banners');
if(banners) sliderBanners(Swiper, banners, [Navigation, Autoplay]);