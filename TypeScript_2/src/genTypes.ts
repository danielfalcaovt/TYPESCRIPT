interface ship {
    name:string
    speed:number
}

interface Fighter extends ship{
    weapons: number
}

function copyShip<ShipType extends {name:string,weapons?:number}>(oldShip:ShipType,newName:string,):ShipType|undefined{
    const newShip = oldShip;
    newShip.name = newName;
    return newShip;
};

const shipClone:Fighter = {
    name:"Falcon",
    speed:100,
    weapons:5
}

type Enemy = {
    name:string
    speed:number
};

const enemyShip:Enemy = {
    name:"enemy",
    speed:100
}
const newShippa = copyShip(shipClone,'Daniel');
console.log(newShippa);

const Enemy = copyShip<Enemy>(shipClone,'Shippao');