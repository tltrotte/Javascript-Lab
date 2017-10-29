
var start = document.getElementsByTagName("button")[0];
var name="";
start.onclick = function (){
    var name = prompt ('What do they call you?');
    document.getElementById("startButton").style.display = "none";
    document.getElementById("second").style.display = "block";
    player.title = name;
}

var startAttack = document.getElementById("attack");
startAttack.onclick = function() {
  player.health -= grant.generateAttackDamage();
  grant.health-= player.generateAttackDamage();
  document.getElementById("playerSpan").innerHTML = player.title + "'s status " + player.health;
  document.getElementById("grantSpan").innerHTML = grant.health;
  document.getElementById("playerStatus").value = (player.health -= grant.generateAttackDamage());
  document.getElementById("grantStatus").value = (grant.health-= player.generateAttackDamage());
  if (grant.health <= 0 && player.health >0) {
        grant.health = 10;
        player.wins++ ;
        document.getElementById("winStatus").value= player.wins;
        console.log ("Next Round");

      }
      if (player.wins === 3 ){
        alert(player.title + " is the winner");
      }
      if(player.health <= 0){
        alert (grant.title + " is the winner");
      }

}
var healButton = document.getElementById("heal");
healButton.onclick = function (){
  player.heal();
  document.getElementById("healStatus").value = (player.healCount += 1);
  console.log(healButton);

}

var quitButton = document.getElementById("quit");
quitButton.onclick = function (){
  alert("See ya later loser");
}


var player = {
title: "",
health: 40,
wins:0,
healCount:0,
generateAttackDamage: function(){
  return Math.floor(Math.random() * 3) + 1
  },
heal: function(){
  this.health+=Math.floor(Math.random() * 10) + 1
}
};
var grant = {
  title: "The Almighty Grant",
  health: 10,
  generateAttackDamage: function() {
    return Math.floor(Math.random() * 3) + 1
  }
};
