var nav = (function() {
  var mainNav = {};

  mainNav.init = function() {
    var tgl = document.querySelector('.js-nav-toggle');
    var menu = document.querySelector('.js-header');

    tgl.addEventListener('click', function(e) {
        e.preventDefault();
        
        menu.classList.toggle('open');
    });
  }

  return mainNav;

})();
