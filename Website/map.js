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
function check(lat, lng)
{
    $.getJSON( "http://cors.io/?https://maps.googleapis.com/maps/api/elevation/json?locations=39.7391536,-104.9847034&key=AIzaSyCnNDcEs9Vl7grUvFWosxzqjuZ-zF-mqMk", function( data ) {
    console.log(data);
});
}
function eqfeed_callback(results)
{
    check(-40,100);
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: {lat: 37, lng: -120},
        mapTypeId: 'satellite'
    });
    var heatmapData = [
    new google.maps.LatLng(30, -100.447),
    new google.maps.LatLng(30, -100.445),
    new google.maps.LatLng(30, -100.443)
    ];
    var symptoms = ["Coughing"];
    for(var i = 0; i < 10000; i++)
    {
        heatmapData.push(new google.maps.LatLng(Math.random()*180-90,Math.random()*360-180));
    }
    var heatmap = new google.maps.visualization.HeatmapLayer({
          data: heatmapData,
          dissipating: true,
          map: map
    });
    heatmap.set('radius', 10);
} 