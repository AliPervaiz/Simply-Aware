google.charts.load('current', {'packages':['geochart'],'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'});
google.charts.setOnLoadCallback(drawRegionsMap);
function drawRegionsMap() 
{
    var data = google.visualization.arrayToDataTable(
    [
        ['Region Code', 'Continent', 'Cases'],
        ['142', 'Asia', 0],
        ['150', 'Europe', 900],
        ['021', 'Northern America', 300],
        ['013', 'Central America', 300],
        ['005', 'South America', 900],
        ['009', 'Oceania', 300],
        ['002', 'Africa', 300]
    ]);
    var options = {'title':'My Average Day', resolution:'subcontinents', 'width':'50%', 'height':'100%'};
    var chart = new google.visualization.GeoChart(document.getElementById('geochart'));
    chart.draw(data, options);
}
