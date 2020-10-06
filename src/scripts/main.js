
import burgerTriggle from './modules/burger';
import sliders from './modules/slider';
import modal from './modules/madal';

window.addEventListener("DOMContentLoaded", () => {

  burgerTriggle('.burger__menu','.header__menu');

  sliders('.swiper-slide', '','','autoplay');
  modal('[data-modal]','[data-opnen-modal]');
});
