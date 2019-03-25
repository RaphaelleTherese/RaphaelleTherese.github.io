var loserNum;

window.onload = setLoser();

var p1 = 0;
var p2 = 0;

document.getElementById('p1score').innerHTML = p1;
document.getElementById('p2score').innerHTML = p2;

var whichPlayer = 1;
var messNum;

function setLoser() {
    loserNum = Math.floor(Math.random() * 9 + 1);
}
function checkPick(circNum) {
    if(circNum == loserNum){
		increaseScore();
        popupController('visible');
        circlesController('hidden');
		scoresController('hidden');
    } else{
       document.getElementById('circ' + circNum).style.visibility = 'hidden'; 
    }
    indicatePlayer();
}
function circlesController(status){
    for(var i = 1; i <= 9; i++){
        document.getElementById('circ' + i).style.visibility = status;
    }
}
function popupController(status){
    document.getElementById('popup').style.visibility = status;
	document.getElementById('loserMessage').innerHTML = "Sorry Player " + messNum + "--<br><br>You LOSE!";
	document.getElementById('scoreMessage').innerHTML = "<br><br>Player 1: " + p1 + "<br>Player 2: " + p2;
}
function scoresController(status){
	document.getElementById('footer').style.visibility = status;
}
function restart(){
    setLoser();
    popupController('hidden');
    circlesController('visible');
	scoresController('visible');
}
function indicatePlayer(){
    whichPlayer++;
    if(whichPlayer % 2 == 0){
        document.getElementById('go1').style.backgroundColor = "transparent";
        document.getElementById('go2').style.backgroundColor = "firebrick";
    } else{
        document.getElementById('go1').style.backgroundColor = "firebrick";
        document.getElementById('go2').style.backgroundColor = "transparent";
    }
}
function increaseScore(){
    if(whichPlayer % 2 == 0){
        p1++;
        document.getElementById('p1score').innerHTML = p1;
		messNum = 2;
    } else{
        p2++;
        document.getElementById('p2score').innerHTML = p2;
		messNum = 1;
    }
}