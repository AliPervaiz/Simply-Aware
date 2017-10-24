var map;
/*function initMap()
{
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 37, lng: -120},
        mapTypeId: 'satellite'
    });
    var script = document.createElement('script');
    // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
    script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
    document.getElementsByTagName('head')[0].appendChild(script);
}*/
function eqfeed_callback(results)
{
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: {lat: 37, lng: -120},
        mapTypeId: 'satellite'
    });
    var heatmapData = [
    new google.maps.LatLng(30, -122.447),
    new google.maps.LatLng(40, -100.445),
    new google.maps.LatLng(50, -80.443)
    ];
    var heatmap = new google.maps.visualization.HeatmapLayer({
          data: heatmapData,
          dissipating: false,
          map: map
    });
} 