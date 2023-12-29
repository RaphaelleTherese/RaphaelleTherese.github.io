function buttonHover(divId) {
    document.getElementById(divId).style.transform = "translate(-50%, 10px)";
}

function buttonOut(divId) {
    document.getElementById(divId).style.transform = "translate(-50%, 0)";
}

function responsiveNav(){
    var x = document.getElementById("mytopnav");
    if (x.className === "topnav"){
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}