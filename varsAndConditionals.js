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
  console.log(`Jon Snow has been slain`);
} else if (jamieLannisterAttack > jonSnowDefense) {
  jonSnowHealth = (jonSnowHealth + jonSnowDefense) - jamieLannisterAttack;
  console.log(`Jon Snow has survived the attack with ${jonSnowHealth} remaining`);
}

let healthKit = 50;

if ((jonSnowHealth + 50) >= 100) {
  jonSnowHealth = 100;
} else {
  jonSnowHealth += 50;
}
console.log(`Thanks to the health kit Jon Snow's health is now ${jonSnowHealth}`);

let coinLandsHeads = false;

// if (coinLandsHeads === true) {
//   console.log (`the fight continues`);
// } else {
//   console.log(`Jon is allowed to run away`);
// }

if (coinLandsHeads !== false) {
  console.log (`the fight continues`);
} else {
  console.log(`Jon is allowed to away`);
}

// for (let i = 0; i < 5; i++) {
//   jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
//   console.log(`Jon Snow's health is now ${jonSnowHealth}`);
// }

// for (let i = 0; i < 5; i++) {
//   if (jonSnowHealth >= 0) { //something is wrong here, doesn't make any sense
//     console.log(`Jon Snow has been slain`);
//   } else {
//     jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
//     console.log(`Jon Snow's health is now ${jonSnowHealth}`);
//   }
// }

while (jonSnowHealth > 0){
  jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
  console.log(`Jon Snow's health is now ${jonSnowHealth}`);
  if (jonSnowHealth <= 0) {
    console.log(`Jon Snow has been slain`)
  }
}