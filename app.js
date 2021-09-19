var myLatLng = { lat: 40.8075, lng: -73.9626 };

var mapOptions = {
    center: myLatLng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP

};

var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

var directionsService = new google.maps.DirectionService();

var directionsRenderer = new google.maps.DirectionsRenderer();

directionsRenderer.setMap(map);

function calcRoute() {
    
}