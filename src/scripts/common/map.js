//AIzaSyBTYRTownWHCJdxKQXrC3nb9bOb_FbNxjo

//$(document).ready(function(){


function setMarkers(myMap, myMarkers){		
    
    
    for (var i = 0; i < myMarkers.length; i++) {
      var burger = myMarkers[i];
      
      var myPlacemark = new ymaps.Placemark([burger[1], burger[2]], {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/content/map-marker.svg',
      iconImageSize: [46, 57],
      iconImageOffset: [-3, -42]
      });
      myMap.geoObjects.add(myPlacemark);
    }
  }

google.maps.ready(initMap);
var myMap;

function initMap() {
    // Styles a map in night mode.
    var myMap = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 51.478, lng: -0.027},
      zoom: 11,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
            "featureType": "all",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "weight": "2.00"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#9c9c9c"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#7b7b7b"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#46bcec"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#2e8a3e"
                },
                {
                    "saturation": "-63"
                },
                {
                    "lightness": "14"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#070707"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        }

      ]
    }
    )}
//})    


/*
ymaps.ready(init);
  var myMap;

  function init(){     
      myMap = new ymaps.Map("map", {
          center: [51.478, 27.438],
          zoom: 11,
          controls: ["zoomControl", "fullscreenControl"]
      });
      
  myMap.behaviors.disable('scrollZoom');
  
/*  var burgerMarkers = [
      ['Petrogradka', 59.977, 30.319, 1],
      ];*/
      
      
 // setMarkers(myMap, burgerMarkers)
