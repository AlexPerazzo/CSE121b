// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

while (shipHealth > 0 && targetHealth > 0) {
    encounter()
}

function fireShip() {
  if (shipCanFire(shipHealth, shipAmmo)) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    shipHealth, shipAmmo = reloadShip(shipHealth, shipAmmo);
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

function isHit() {
  // should return true if a randomly generated number is greater than .5, false if it is less than .5
  let chance = Math.random;
  if (chance >= 0.5) {
    return true;
  }

  else return false;
}

function shipCanFire(health, ammo) {
  // return true if the ships health is above 0 AND ammo is above 0 false otherwise
    if (health > 0 && ammo > 0) {
        return true;
    }
    
    else return false;
}



function isDestroyed(health) {
  // return true if health is zero or less
  if (health <= 0) {
    return true;
  }

  else return false;
}


function reloadShip(health, ammo) {
  // reduce ship health by 1 and increase ammo by 3
  health -= 1;
  ammo += 3;

  return health, ammo;
}