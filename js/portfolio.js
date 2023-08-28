var tablinks =document.getElementsByClassName("tablinks");
var tabcontains =document.getElementsByClassName("tabcontains");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("activelink");
    }
    for(tabcontain of tabcontains){
        tabcontains.classList.remove("activetab");
    }

    Event.currentTarget.classList.add("activelink");
    document.getElementById("tabname").classList.add("activetab")
}


var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right ="0";
}

function closemenu(){
    sidemenu.style.right ="-200px";
}
