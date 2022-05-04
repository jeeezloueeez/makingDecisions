let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

if (jonSnowAttack > jamieLannisterAttack) {
  console.log("Jon Snow has a greater attack than Jamie Lannister");
} else if (jonSnowAttack < jamieLannisterAttack){
  console.log ("Jamie Lannister has a better attack than Jon Snow");
} else {
  console.log("Jon Snow and Jamie Lannister have the same attack");
}

let jonSnowHealth = 100;
let jonSnowDefense = 0;

if (jonSnowHealth <= jamieLannisterAttack) {
  console.log("Jon has been slain");
} else {
  //jonSnowHealth = jonSnowHealth - jamieLannisterAttack
  jonSnowHealth -= jamieLannisterAttack
  console.log(`Jon has survived the attack with ${jonSnowHealth} health remaining`);
}

jonSnowDefense += 25

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
  console.log(`Jon Snow is dead`);
} else if (jamieLannisterAttack > jonSnowDefense) {
  jonSnowHealth = (jonSnowHealth + jonSnowDefense) - jamieLannisterAttack;
  console.log(`Jon Snow has survived the attack with ${jonSnowHealth} remaining`);
}

