$(document).ready(function() {

  document.querySelector('.js-nav-toggle') && nav.init();
  document.querySelector('.js-slider') && slider.init();
  document.querySelector('#js-map') && gmap.init();
  
  // console.log(document.querySelector('.slider'));
  // console.log(document.querySelector('.slider2'));
  // console.log(1 && 2);
  // console.log(null && 2);
});