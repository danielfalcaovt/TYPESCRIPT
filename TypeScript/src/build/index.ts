const spaceships:object[] = [];

function createSpaceship(ship:{name:string,pilot:string,crew:string[],crewLimit:number,inMission?:boolean}) {
    ship.inMission = false;
    spaceships.push(ship);
};
function insertMember(member:string,ship:{name:string,crew:string[],crewLimit:number}) {
    if (ship.crew.length === ship.crewLimit){
        console.log("Your ship it's full.");
    }else{
        ship.crew.push(member);
    };
};
function sendSpaceship(ship:{name:string,pilot:string,crew:string[],crewLimit:number,inMission:boolean }) {
    const minimumCrew = Math.floor(ship.crewLimit / 3);
    if (ship.crew.length < minimumCrew){
        console.log("You needing have at least a third of the crewLimit to send your spaceship");
    }else if(ship.crew.length > ship.crewLimit){
        console.log("You can't add more members than the limit of the spaceship.");
    }else{
        ship.inMission = true;
        console.log("Your spaceship have been send.");
    }
};
function listAll(spaceships:object[]) {
    spaceships.map((ship)=>{
        console.log(ship);
    });
};



function handleCreation(evt:any){
    evt.preventDefault();
    const shipName:string = document.querySelector("#shipname");
    const pilot:string = document.querySelector("#pilot");
    const crewLimit:number = document.querySelector("#crews");
    const inMiss:boolean = document.querySelector("#inMission").checked;
        console.log(inMiss.checked);

};
