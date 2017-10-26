
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
var grantWins = 0
function startGame (){
  var start = prompt ("Would you like to play a game?");
  if(start==='yes'){
    var name = prompt ('What do they call you?');
    player.title = name;
    startCombat();
  }
}
var grant = {
  title: "Grant",
  health: 10,
  generateAttackDamage: function() {
    return Math.floor(Math.random() * 3) + 1
 }
};
var player = {
  title: null,
  health:40,
  wins: 0,
  healCount:0 ,
  generateAttackDamage:  function () {
  return Math.floor(Math.random() * 3) + 1},
  heal:function (){
  this.play+= Math.floor(Math.random() * 10) + 1}
};

startGame();

function startCombat(){
  while(grant.health > 0 && player.health >0){
    var damage =  prompt("Attack, quit or heal");
   if (damage === "Attack"){
      player.health -= grant.generateAttackDamage();
      grant.health-= player.generateAttackDamage();
      console.log(player.title +" has " + player.health + " points left.");
      console.log(grant.title + "has" + grant.health + " points left.");
   }
      else if( damage === "heal"){
        if(player.healCount<=2){
        player.heal();
        grant.generateAttackDamage();
        console.log("Current standing " + player.health + " Current standing" + grant.health );
        }
        else if (player.healCount>1){
          console.log ("you can't heal either play or quit")}
    }
    if (grant.health <= 0 && player.health >0) {
          grant.health = 10;
          console.log ("Next Round")
        }
        if (player.health <= 0) {
          grantWins ++;
          console.log(name +" has lost the game.");
        }
        else if ( grant.health <=0)
          {player.wins += player.wins++;
         console.log (player.title + " wins the game!");
       }

      console.log(player.wins+ " wins for " + player.title);
       if( damage==="quit"){
      console.log ("You're lucky!")
      break;
}

  }

 console.log ("FINAL SCORE");
  console.log(grantWins + " wins for Almighty Grant");
  console.log( player.wins + " wins for " + player.title);
}
}
/*function startGame (){
  var start = prompt ("Would you like to play a game?");
  if(start==='yes'){
    var name = prompt ('What do they call you?');
    player.name = name;
    startCombat();
  }
}
var grant = {
  title: "Grant",
  health: 10,
  generateAttackDamage: f() {
    return Math.floor(Math.random() * 3) + 1;,
}
};
var player = {title: null,
health:40,
wins: 0,
healCount:0 ,
generateAttackDamage = function () {
  return Math.floor(Math.random() * 3) + 1},
heal:function (){
  this.play+= Math.floor(Math.random() * 10) + 1};
}
};
startGame();

function startCombat(){
//  function getDamage(){
//    return Math.floor(Math.random() * 5) + 1
//  }
//  var name = user;
//  var grantpoints = 10;
//var namepoints = 40;
//  var grantLosses = 0;
//var nameWins = 0;
//var grantWins = 0;
//var round = 2;

  while(grantpoints > 0 && namepoints >0){
    var damage =  prompt("Attack, quit or heal");
    if( damage==="quit"){
      console.log ("You're lucky!")
      break;
      else if( damage === "heal"){
        if(player.healCount<=1){
        player.heal();
        grant.generateAttackDamage();
        console.log("Current standing " + player.health + " Current standing" + grant.health );
        }
        else if (player.healCount>1){
          console.log ("you can't heal either play or quit")}
    }
    if (damage === "Attack"){
      player.health -= grant.generateAttackDamage();
      grant.health-= player.generateAttackDamage();
      console.log(player.title +" has " + namepoints + " points left.");
      console.log(grant.title + "has" + grantpoints + " points left.");
      if (grantpoints <= 0) {
        grantLosses++;}

        if (grant.health <= 0 && player.health >0) {
          grant.health = 10;
          console.log ("Next Round")
        }
        //if (player.health <= 0) {
        //  grantWins ++;
        //  console.log(name +" has lost the game.");
        }
      //  else { nameWins++;
        //  console.log (name + " wins the game!");

        }
      }
      /*console.log ("FINAL SCORE")
      console.log(grantWins + " wins for Almighty Grant");
      console.log(+ nameWins + " wins for " + name );

    }

  console.log ("FINAL SCORE")
  console.log(grantWins + " wins for Almighty Grant");
  console.log(+ nameWins + " wins for " + name );
}

var grant = {
  title: "Grant",
  health: 10,
  generateAttackDamage: f() {
    return Math.floor(Math.random() * 3) + 1;,
}
};
var player = {title: null,
health:40,
wins: 0,
healCount:0 ,
generateAttackDamage = function () {
  return Math.floor(Math.random() * 3) + 1},
heal:function (){
  this.play+= Math.floor(Math.random() * 10) + 1};
}
};
startGame();


var grantWins = 0
function startGame (){
  var start = prompt ("Would you like to play a game?");
  if(start==='yes'){
    var name = prompt ('What do they call you?');
    player.name = name;
    startCombat();
  }
}
var grant = {
  title: "Grant",
  health: 10,
  generateAttackDamage: function() {
    return Math.floor(Math.random() * 3) + 1
 }
};
var player = {
  title: null,
  health:40,
  wins: 0,
  healCount:0 ,
  generateAttackDamage:  function () {
  return Math.floor(Math.random() * 3) + 1},
  heal:function (){
  this.play+= Math.floor(Math.random() * 10) + 1}
};

startGame();

function startCombat(){
  while(grant.health > 0 && player.health >0 && player.wins <  3){
    var damage =  prompt("Attack, quit or heal");
   if (damage === "Attack"){
      player.health -= grant.generateAttackDamage();
      grant.health-= player.generateAttackDamage();
      console.log(player.title +" has " + player.health + " points left.");
      console.log(grant.title + "has" + grant.health + " points left.");
      if( damage === "heal"){
        if(player.healCount<=1){
        player.heal();
        grant.generateAttackDamage();
        console.log("Current standing " + player.health + " Current standing" + grant.health );
        }
        else if (player.healCount>1){
          console.log ("you can't heal either play or quit")}
    }

       if( damage==="quit"){
      console.log ("You're lucky!")
      break;

        if (grant.health <= 0 && player.health >0) {
          grant.health = 10;
          console.log ("Next Round")
        }
        if (player.health <= 0) {
          grantWins ++;
          console.log(name +" has lost the game.");
        }
        else { player.wins;
         console.log (name + " wins the game!");
;
      console.log(+ nameWins + " wins for " + name );

    }
 console.log ("FINAL SCORE")
  console.log(grantWins + " wins for Almighty Grant");
  console.log(+ nameWins + " wins for " + name );
}*/
