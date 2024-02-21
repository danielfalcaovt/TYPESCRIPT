"use strict";
let userOptions;
userOptions = "Yes";
if (userOptions == "Yes") {
    console.log("do something.");
}
const helloworld = (name, peaceful) => {
    if (peaceful) {
        return `Hello ${name} you're very handsome today.`;
    }
    else {
        return "F*ck you.";
    }
};
console.log(helloworld("Daniel", true));
console.log(helloworld("Davidson", false));
let planets;
function planetSaving(planet) {
    const newPlanet = {
        name: planet.name,
        coord: planet.coord,
        situacao: planet.situacao,
        satelites: planet.satelites
    };
    planets = newPlanet;
}
;
function updateSituation(planet, update) {
    //input ao usuario perguntando qual opção das 4 do padrão 'situation'
    planet.situacao = update.situacao;
}
;
function addSatelite(planet, update) {
    planet.satelites.push("Hey, Iam here");
}
;
const planetinha = {
    name: "planetão",
    coord: [1, 2, 3, 4],
    situacao: "inábitavel",
    satelites: ["Nenhum"]
};
planetSaving(planetinha);
updateSituation(planets, { name: "planetasso", situacao: "habitável" });
console.log(planets);
