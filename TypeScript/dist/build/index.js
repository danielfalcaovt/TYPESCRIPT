"use strict";
const spaceships = [];
function createSpaceship(ship) {
    ship.inMission = false;
    spaceships.push(ship);
}
;
function insertMember(member, ship) {
    if (ship.crew.length === ship.crewLimit) {
        console.log("Your ship it's full.");
    }
    else {
        ship.crew.push(member);
    }
    ;
}
;
function sendSpaceship(ship) {
    const minimumCrew = Math.floor(ship.crewLimit / 3);
    if (ship.crew.length < minimumCrew) {
        console.log("You needing have at least a third of the crewLimit to send your spaceship");
    }
    else if (ship.crew.length > ship.crewLimit) {
        console.log("You can't add more members than the limit of the spaceship.");
    }
    else {
        ship.inMission = true;
        console.log("Your spaceship have been send.");
    }
}
;
function listAll(spaceships) {
    spaceships.map((ship) => {
        console.log(ship);
    });
}
;
function handleCreation(evt) {
    evt.preventDefault();
    const shipName = document.querySelector("#shipname");
    const pilot = document.querySelector("#pilot");
    const crewLimit = document.querySelector("#crews");
    const inMiss = document.querySelector("#inMission").checked;
    console.log(inMiss.checked);
}
;
