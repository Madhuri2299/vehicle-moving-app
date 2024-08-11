let map;
let vehicleMarker;
let path = [];
let polyline;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 15
    });

    vehicleMarker = new google.maps.Marker({
        map: map,
        title: 'Vehicle'
    });

    polyline = new google.maps.Polyline({
        path: path,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    polyline.setMap(map);

    // Simulate vehicle movement
    setInterval(updateVehicleLocation, 2000); // Update every 2 seconds
}

function updateVehicleLocation() {
    // For demo purposes, simulate vehicle movement
    const newLatLng = {
        lat: map.getCenter().lat() + (Math.random() - 0.5) * 0.01,
        lng: map.getCenter().lng() + (Math.random() - 0.5) * 0.01
    };

    vehicleMarker.setPosition(newLatLng);
    path.push(newLatLng);
    polyline.setPath(path);

    map.setCenter(newLatLng);
}

window.onload = initMap;
