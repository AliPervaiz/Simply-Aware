google.charts.load('current', {'packages':['corechart','geochart'],'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawRegionsMap);
function drawChart()
{
    var data = google.visualization.arrayToDataTable(
    [
        ['Task', 'Hours per Day'],
        ['Work', 8],
        ['Eat', 2],
        ['TV', 4],
        ['Gym', 2],
        ['Sleep', 8]
    ]);
    var options = {'title':'My Average Day', 'width':200, 'height':200, 'is3D': true};
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}   
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
    var options = {resolution:'subcontinents', 'width':200, 'height':200};
    var chart = new google.visualization.GeoChart(document.getElementById('geochart'));
    chart.draw(data, options);
}