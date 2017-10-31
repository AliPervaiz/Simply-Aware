function dataClick()
{              
    document.getElementById('data').style.zIndex=1;
    document.getElementById('map').style.zIndex=0;
}
function mapClick()
{              
    document.getElementById('map').style.zIndex=1;
    document.getElementById('data').style.zIndex=0;
}
function formClick()
{
    if(document.getElementById("symptomsform").style.height == "0%")
    {
        document.getElementById("symptomsform").style.height = "30%";
        document.getElementById("diseasesform").style.height = "40%";
    }    
    else
    {
        document.getElementById("symptomsform").style.height = "0%";
        document.getElementById("diseasesform").style.height = "70%";
    }  
}
function formsubmit()
{
    formClick();
    var children = document.getElementById('symptomsform').getElementsByTagName('*');
    for(var i = 0; i < children.length; i++)
        children[i].checked = false;
    children[children.length-1].value = "";
}
function remap()
{
    var children = document.getElementById('diseasesform').getElementsByTagName('*');
    console.log(Math.floor((children.length-1)/2));
    newData = [new google.maps.LatLng(21.439858156592408,106.26054790558447)];
    for (var i = 1; i < children.length; i+=2) 
    {
        console.log(Math.floor((i+1)/2));
        if(children[i].checked)
        {
            for(var j = 0; j < heatmapData.length; j++)
            {
                if(j%Math.floor((children.length-1)/2) == Math.floor((i+1)/2))
                {
                    newData.push(heatmapData[j]);
                }
            }
        }
    }
    pointArray = new google.maps.MVCArray(newData);
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: {lat: 37, lng: -120},
        mapTypeId: 'satellite'
    });
    var gradient = 
    [
          'rgba(0, 255, 0, 0)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 255, 0, 1)',
          'rgba(255, 255, 0, 1)',
          'rgba(255, 0, 0, 1)'
     ];
    heatmap = new google.maps.visualization.HeatmapLayer({
        data: pointArray,
        dissipating: false,
        map: map,
        gradient: gradient,
        radius: 7
    });
}

