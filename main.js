var submitData = [];
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
    var location;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
    function showPosition(position)
    {
        location = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
        var children = document.getElementById('symptomsform').getElementsByTagName('*');
        for(var i = 0; i < children.length; i++)
        {
            if(children[i].checked)
            {
                console.log(location);
                var dict = {
                    "location": location,
                    "name": children[i].value
                };
                submitData.push(dict);
            }
        }
        children[children.length-1].value = "";
    }   
}
function remap()
{
    console.log(submitData);
    var newData = [];
    var children = document.getElementById('diseasesform').getElementsByTagName('*');
    for (var i = 1; i < children.length; i+=2) 
    {
        if(children[i].checked)
        {
            for(var j = 0; j < heatmapData.length; j++)
            {
                if(j%Math.floor((children.length-1)/2) == Math.floor((i+1)/2))
                {
                    newData.push(heatmapData[j]);
                }
            }
            for(var j = 0; j < submitData.length; j++)
            {
                console.log(submitData[j]["name"]);
                if(submitData[j]["name"]==children[i].value)
                {
                    console.log(submitData[j]["location"]);
                    newData.push(submitData[j]["location"]);
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

