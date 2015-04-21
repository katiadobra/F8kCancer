var gmap = (function() {
  var pinkmap = {};

  pinkmap.init = function() {

    var map;
    var pink = new google.maps.LatLng(59.936468, 30.321086);
    var markers = [];
    var image = new google.maps.MarkerImage('img/icon.png');

    
    var mapOptions = {
      zoom: 15,
      center: pink,
      draggable: false,
      scrollwheel: false,
      mapTypeControl: false,
      navigationControl: false
    };

    map = new google.maps.Map(document.getElementById("js-map"), mapOptions);
    addMarker();

    function addMarker() {
      markers.push(new google.maps.Marker({
        position: pink,
        raiseOnDrag: false,
        icon: image,
        map: map,
        draggable: false
      }));
    }
  }

  return pinkmap;

})();
