"use strict";
function copyShip(oldShip, newName) {
    const newShip = oldShip;
    newShip.name = newName;
    return newShip;
}
;
const shipClone = {
    name: "Falcon",
    speed: 100,
    weapons: 5
};
const enemyShip = {
    name: "enemy",
    speed: 100
};
const newShippa = copyShip(shipClone, 'Daniel');
console.log(newShippa);
const Enemy = copyShip(shipClone, 'Shippao');
