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
    if(document.getElementById("symptoms").style.display == "none")
    {
        document.getElementById("symptoms").style.display = "block";
        document.getElementById("diseasesform").style.height = "30%";
    }    
    else
    {
        document.getElementById("symptoms").style.display = "none";
        document.getElementById("diseasesform").style.height = "80%";
    }  
}
