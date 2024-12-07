/*
//CASO DE ERRO NAQUELES LINKS NO HTML, DO SWIPER .CSS E .MJS, DESCOMENTE ESSA
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.mjs';
import 'https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css';

 */

var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });