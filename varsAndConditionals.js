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
    console.log(`Jon Snow has been slain`);
  }
}

let backpack = [];

backpack.push('sword', `shield`, `food`);
// backpack.unshift(`sword`, `shield`, `food`);
// backpack.splice(0, 0, `sword`, `shield`, `food`);

console.log(backpack);

let belt = backpack.splice(0, 1);

console.log(backpack);
console.log(belt);

let furCoat = `fur coat`;

backpack.splice(2, 0, furCoat);
console.log(backpack);
console.log(belt);

backpack.pop();
console.log(backpack);

let itemCount = backpack.length;
console.log(itemCount)

backpack.splice(3, 0, `flint`, `blanket`, `knife`, `toothbrush`);
console.log(backpack)

let backpackTwo = backpack.splice(2, 3)
console.log(backpackTwo)

// console.log(backpackTwo[0])

// lets see the contents of jon's backpack

// for (let i = 0; i < backpackTwo.length; i++) {
//   console.log(backpackTwo[i])
// }

// for (let i = 0; i < backpack.length; i++) {
//   console.log(backpack[i])
// }



if (backpackTwo.lenght >= 3) {
  for (let i = 0; i < 3; i++) {
    console.log(backpackTwo[i])
  }
} else {
  for (let i = 0; i < backpackTwo.length; i++) {
    console.log(backpackTwo[i])
  }
}

if (backpack.lenght >= 3) {
  for (let i = 0; i < 3; i++) {
    console.log(backpack[i])
  }
} else {
  for (let i = 0; i < backpackTwo.length; i++) {
    console.log(backpack[i])
  }
}