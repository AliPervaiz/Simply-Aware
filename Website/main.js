function dataClick()
{              
    document.getElementById('data').style.zIndex=1;
    document.getElementById('map').style.zIndex=0;
    document.getElementById('form').style.zIndex=0;
}
function mapClick()
{              
    document.getElementById('map').style.zIndex=1;
    document.getElementById('data').style.zIndex=0;
    document.getElementById('form').style.zIndex=0;
}
function formClick()
{              
    document.getElementById('form').style.zIndex=1;
    document.getElementById('data').style.zIndex=0;
    document.getElementById('map').style.zIndex=0;
}