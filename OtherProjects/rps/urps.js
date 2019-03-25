var userWeapon;
var compWeapon;
var userHP = "20";
var compHP = "20";
var userAttack;
var compAttack;
var scene;

//SCENE
function sceneElementsVisibility(){
    if(scene === "scene1"){
        document.getElementById('scene1').style.visibility = "visible";
        document.getElementById('scene2').style.visibility = "hidden";
        document.getElementById('scene3').style.visibility = "hidden";
    }
    if(scene === "scene2"){
        document.getElementById('scene1').style.visibility = "hidden";
        document.getElementById('scene2').style.visibility = "visible";
        document.getElementById('scene3').style.visibility = "hidden";
        
        document.getElementById('userRock').style.visibility = "hidden";
        document.getElementById('userPaper').style.visibility = "hidden";
        document.getElementById('userScissors').style.visibility = "hidden";
        
        document.getElementById('compRock').style.visibility = "hidden";
        document.getElementById('compPaper').style.visibility = "hidden";
        document.getElementById('compScissors').style.visibility = "hidden";
        
        document.getElementById('attackButton').style.animation = "";
        document.getElementById('nextButton').style.animation = "";
        
        document.getElementById('attackButton').style.visibility = "hidden";
        document.getElementById('nextButton').style.visibility = "hidden";
        
        document.getElementById('compRock').style.animation = "";
        document.getElementById('compPaper').style.animation = "";
        document.getElementById('compScissors').style.animation = "";
    
        document.getElementById('userRock').style.animation = "";
        document.getElementById('userPaper').style.animation = "";
        document.getElementById('userScissors').style.animation = "";
    }
    if(scene === "scene3"){
        document.getElementById('scene1').style.visibility = "hidden";
        document.getElementById('scene2').style.visibility = "hidden";
        document.getElementById('scene3').style.visibility = "visible";
        
        document.getElementById('attackButton').style.visibility = "visible";
        document.getElementById('nextButton').style.visibility = "hidden";
    }
}

function changeScene(divId1, divId2) {
    document.getElementById(divId1).style.visibility = "hidden";
    document.getElementById(divId2).style.visibility = "visible";
    scene = divId2;
    
    sceneElementsVisibility();
}

window.onload = changeScene('scene1', 'scene1');

//CHOOSE WEAPONS FOR BOTH PLAYERS
function chooseWeapons(weapon){
    userWeapon = weapon;
    if (weapon === 'rock'){
        document.getElementById('userRock').style.visibility = "visible";
        document.getElementById('userPaper').style.visibility = "hidden";
        document.getElementById('userScissors').style.visibility = "hidden";
    } 
    else if (weapon === 'paper'){
        document.getElementById('userRock').style.visibility = "hidden";
        document.getElementById('userPaper').style.visibility = "visible";
        document.getElementById('userScissors').style.visibility = "hidden";
    }
    else{
        document.getElementById('userRock').style.visibility = "hidden";
        document.getElementById('userPaper').style.visibility = "hidden";
        document.getElementById('userScissors').style.visibility = "visible";
    }
    
    var weaponRandom = Math.random();
    if (weaponRandom <= 0.33){
        document.getElementById('compRock').style.visibility = "visible";
        document.getElementById('compPaper').style.visibility = "hidden";
        document.getElementById('compScissors').style.visibility = "hidden";
        compWeapon = "rock";
    }                                                                                                                           
    else if (weaponRandom <= 0.67){
        document.getElementById('compRock').style.visibility = "hidden";
        document.getElementById('compPaper').style.visibility = "visible";
        document.getElementById('compScissors').style.visibility = "hidden";
        compWeapon = "paper";
    }
    else{ 
        document.getElementById('compRock').style.visibility = "hidden";
        document.getElementById('compPaper').style.visibility = "hidden";
        document.getElementById('compScissors').style.visibility = "visible";
        compWeapon = "scissors"
    }
    
}

//SUBTRACTS HEALTH AND INCLUDES FUNCTION AT THE END
function healthDisplay(){
    if(userWeapon === compWeapon){
            userHP = userHP - 5;
            if(userHP <=  0){
                userHP = '0';
            }
            document.getElementById('userHealth').style.width = (10* userHP) + "px";
            compHP = compHP - 5;
            if(compHP <= 0){
                compHP = '0';
            }
            document.getElementById('compHealth').style.width = (10* compHP) + "px";
            
    }
    else if(userWeapon === "rock"){
        if(compWeapon === "paper"){
            if(userHP > 0 && compHP > 0){
                userHP = userHP - 6;

                compHP = compHP - 4;
            }
            if(userHP <=  0){
                userHP = '0';
            }
            if(compHP <= 0){
                compHP = '0';
            }
          
            document.getElementById('userHealth').style.width = (10* userHP) + "px";
            document.getElementById('compHealth').style.width = (10* compHP) + "px";
        }
        else{
            if(compHP > 0 && userHP > 0){
                userHP = userHP - 4;

                compHP = compHP - 6;
            }
            if (userHP <= 0){
                userHP = '0';
            }
            if (compHP <= 0){
                compHP = '0';
            }
            document.getElementById('userHealth').style.width = (10* userHP) + "px";
            document.getElementById('compHealth').style.width = (10* compHP) + "px";
        }
    }
    else if(userWeapon === "paper"){
        if(compWeapon === "rock"){
            if(compHP > 0 && userHP > 0){
                userHP = userHP - 4;

                compHP = compHP - 6;
            }
            if (userHP <= 0){
                userHP = '0';
            }
            if (compHP <= 0){
                compHP = '0';
            }
            document.getElementById('userHealth').style.width = (10* userHP) + "px";
            document.getElementById('compHealth').style.width = (10* compHP) + "px";
        }
        else{
            if(userHP > 0 && compHP > 0){
                userHP = userHP - 6;
                
                compHP = compHP - 4;
            }
            if(userHP <= 0){
                userHP = '0';
            }
            if(userHP <= 0){
                compHP = '0';
            }
            document.getElementById('userHealth').style.width = (10* userHP) + "px";
            document.getElementById('compHealth').style.width = (10* compHP) + "px";
        }
    }
    else{
        if(compWeapon === "rock"){
            if(userHP > 0 && compHP > 0){
                userHP = userHP - 6;

                compHP = compHP - 4;
            }
            if (userHP <= 0){
                userHP = '0';
            }
            if (compHP <= 0){
                compHP = '0';
            }
                document.getElementById('userHealth').style.width = (10* userHP) + "px";
                document.getElementById('compHealth').style.width = (10* compHP) + "px";
        }
        else{
            if(compHP > 0 && userHP > 0){
                userHP = userHP - 4;

                compHP = compHP - 6;
            }
            if (userHP <= 0){
                userHP = '0';
            }
            if (compHP <= 0){
                compHP = '0';
            }
                document.getElementById('userHealth').style.width = (10* userHP) + "px";
                document.getElementById('compHealth').style.width = (10* compHP) + "px";
        }

    }
    
    attackAnimation();
    buttonAnimation();
    checkValue();
}

//ANIMATIONS
function attackAnimation(){
    document.getElementById('compRock').style.animation = "compAttack 1s";
    document.getElementById('compPaper').style.animation = "compAttack 1s";
    document.getElementById('compScissors').style.animation = "compAttack 1s";
    
    document.getElementById('userRock').style.animation = "userAttack 1s";
    document.getElementById('userPaper').style.animation = "userAttack 1s";
    document.getElementById('userScissors').style.animation = "userAttack 1s";
}

function buttonAnimation(){
    document.getElementById('attackButton').style.animation = "display 1010ms";
    document.getElementById('nextButton').style.animation = "displayInverse 1010ms 1010ms";
    
    document.getElementById('attackButton').style.animationFillMode = "forwards";
    document.getElementById('nextButton').style.animationFillMode = "forwards";
}

//CHECKS WHO WINS
function checkValue(){
    if(compHP <= 0 && userHP <= 0){
        document.getElementById('outcomePopup').style.animation = "display 1s 1020ms infinite";
        document.getElementById('outcomePopup').style.animationFillMode = "forwards";
        document.getElementById('nextButton').style.animation = "";
        document.getElementById('nextButton').style.visibility = "hidden";
        document.getElementById('outcome').innerHTML = "You TIED!";
    }
    
    else if(compHP <= 0){
        document.getElementById('outcomePopup').style.animation = "display 1s 1020ms infinite";
        document.getElementById('outcomePopup').style.animationFillMode = "forwards";
        document.getElementById('nextButton').style.animation = "";
        document.getElementById('nextButton').style.visibility = "hidden";
        document.getElementById('outcome').innerHTML = "You WON!";
    }
    else if(userHP <= 0){
        document.getElementById('outcomePopup').style.animation = "display 1s 1020ms infinite";
        document.getElementById('outcomePopup').style.animationFillMode = "forwards";
        document.getElementById('nextButton').style.animation = "";
        document.getElementById('nextButton').style.visibility = "hidden";
        document.getElementById('outcome').innerHTML = "You LOST.";
    }
    
    
}

//RELOADS PAGE ON PLAY AGAIN BUTTON
function reload(){
    location.reload();
}
