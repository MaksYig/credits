// core version + navigation, pagination modules:
import Swiper from "swiper/bundle";

var mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable:true,
  },

});
