
var start = prompt ("Would you like to play a game?");


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

// game battle


// for (name=40; name>0; name=Math.floor(Math.random() * 2) + 1 {
//  console.log(name);




//var battle = Math.floor(Math.random(2+1) * 2) + 1;
//var i = (grantpoints && userpoints);
//var a = (grantpoints || userpoints);

while(grantpoints >= 0 && namepoints >= 0){
  var battle = Math.floor(Math.random(2+1) * 2) + 1;
  var battle2 = Math.floor(Math.random(2+1) * 2) + 1;
  grantpoints -= battle;
  namepoints -= battle2;
  console.log(name +" has " + namepoints + " points left.");
  console.log("Almightly Grant has " + grantpoints + " points left.");
  if (grantpoints === 0) {
    grantLosses++;}

    if (grantpoints === 0 && grantLosses < 3) {
		grantpoints = 10;
		}
}
	if (namepoints = 0) {
	grantWins ++;
	console.log(name +" has lost the game.");
}
else { nameWins++;
	  console.log (name + " wins the game!");

	}
  console.log ("FINAL SCORE")
  console.log(grantWins + " wins for Almighty Grant");
  console.log(+ nameWins + " wins for " + name );
