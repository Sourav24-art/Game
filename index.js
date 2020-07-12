var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

DiceDraw(randomNumber1,"img1");
DiceDraw(randomNumber2,"img2");

function DiceDraw(x,y){
  if(x == 1){
      document.getElementById(y).setAttribute("src","images/dice1.png");
    }
    else if(x == 2){
       document.getElementById(y).setAttribute("src","images/dice2.png");
    }

    else if(x == 3){
       document.getElementById(y).setAttribute("src","images/dice3.png");
    }

    else if(x == 4){
       document.getElementById(y).setAttribute("src","images/dice4.png");
    }

    else if(x == 5){
       document.getElementById(y).setAttribute("src","images/dice5.png");
    }

    else if(x == 6){
      document.getElementById(y).setAttribute("src","images/dice6.png");
    }


}

if(randomNumber1 > randomNumber2){
      document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
    }
    else if (randomNumber1 < randomNumber2){
      document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
    }
    else{
      document.querySelector("h1").innerHTML = "🚩DRAW🚩";
    }
