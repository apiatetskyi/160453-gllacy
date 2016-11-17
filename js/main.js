ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
      center: [59.9392, 30.329],
      zoom: 16
    }),

    gllasyGeoPosition = new ymaps.Placemark([59.938631, 30.323055], {
      hintContent: 'Gllasy — магазин мороженого'
    }, {
      iconImageHref: 'img/map-marker.png',
      iconImageSize: [218, 142],
      iconImageOffset: [-40, -140]
    });

  myMap.geoObjects.add(gllasyGeoPosition)
}
