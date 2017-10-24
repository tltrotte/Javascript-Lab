
/*var start = prompt ("Would you like to play a game?");


if(start==='yes'){
  var name = prompt ('What do they call you?');
} else if(start!=='yes'){
  console.log("BOOOOOOOOO!");
}

var computer = "Almighty Grant";

var grantpoints = 10;
var namepoints = 40;
var grantLosses = 0;
var nameWins = 0;
var grantWins = 0;
var round = 2
// game battle


while(grantpoints >= 0 && namepoints >= 0){
  var battle = Math.floor(Math.random() * 2) + 1;
  var battle2 = Math.floor(Math.random() * 2) + 1;
  grantpoints -= battle;
  namepoints -= battle2;
  console.log(name +" has " + namepoints + " points left.");
  console.log("Almightly Grant has " + grantpoints + " points left.");
  if (grantpoints <= 0) {
    grantLosses++;}

    if (grantpoints <= 0 && grantLosses < 3) {
      grantpoints = 10;
      console.log ("Round " + round++ )
    }
  }
  if (namepoints <= 0) {
    grantWins ++;
    console.log(name +" has lost the game.");
  }
  else { nameWins++;
    console.log (name + " wins the game!");

  }
  console.log ("FINAL SCORE")
  console.log(grantWins + " wins for Almighty Grant");
  console.log(+ nameWins + " wins for " + name );*/

  // Lab Part 2
  function startGame (){
  var start = prompt ("Would you like to play a game?");
    if(start==='yes'){
      var name = prompt ('What do they call you?');
      startCombat(name);
  }
  }
  startGame();

function startCombat(user){
  function getDamage(){
    return Math.floor(Math.random() * 5) + 1
   }
var name = user;
var grantpoints = 10;
var namepoints = 40;
var grantLosses = 0;
var nameWins = 0;
var grantWins = 0;
var round = 2;

  while(grantpoints >= 0 && namepoints >= 0){
  var damage =  prompt("Attack or quit");
  if(damage === "Attack"){
      grantpoints -= getDamage();
      namepoints -= getDamage();
      console.log(name +" has " + namepoints + " points left.");
      console.log("Almightly Grant has " + grantpoints + " points left.");
      if (grantpoints <= 0) {
        grantLosses++;}

        if (grantpoints <= 0 && grantLosses < 3) {
          grantpoints = 10;
          console.log ("Round " + round++ )
        }
      if (namepoints <= 0) {
        grantWins ++;
        console.log(name +" has lost the game.");
      }
      else { nameWins++;
        console.log (name + " wins the game!");

  } if( damage==="quit"){
  console.log ("You're lucky!")
  break;
}
}
  console.log ("FINAL SCORE")
  console.log(grantWins + " wins for Almighty Grant");
  console.log(+ nameWins + " wins for " + name );

  }
}
