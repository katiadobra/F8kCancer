var slider = (function() {
  var module = {};

  module.init = function() {
    $('.js-slider').slick({
      autoplay: true,
      dots: true,
      adaptiveHeight: true,
      arrows: true,
      autoplaySpeed: 3000
    });
  }

  return module;

})();
