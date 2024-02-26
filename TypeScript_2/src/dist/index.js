"use strict";
/* type options = "Yes" | "No" | true | false;

let userOptions: options;

userOptions = "Yes";

if (userOptions == "Yes") {
    console.log("do something.");
}

type peaceful = "Yes" | "No" | true | false
type greeting = (name: string, peaceful: peaceful) => string;


const helloworld: greeting = (name: string, peaceful: peaceful) => {
    if (peaceful) {
        return `Hello ${name} you're very handsome today.`
    } else {
        return "F*ck you."
    }
}

console.log(helloworld("Daniel", true))
console.log(helloworld("Davidson", false));


// EXERCISE::

type situation = "habitado" | "habitável" | "inabitável" | "inexplorado";
type planet = {name: string, coord: [number, number, number, number], situacao: situation, satelites: string[]}
let planets:planet;
function planetSaving(planet:planet) {
    const newPlanet = {
        name:planet.name,
        coord:planet.coord,
        situacao:planet.situacao,
        satelites:planet.satelites
    };
    planets = newPlanet
};

function updateSituation(planet:planet, update:{name:string,situacao:situation}) {
    //input ao usuario perguntando qual opção das 4 do padrão 'situation'
    planet.situacao = update.situacao;
};

function addSatelite(planet:planet,update:{name:string,satelites:string[]}){
    planet.satelites.push("Hey, Iam here");
};
const planetinha = {
    name:"planetão",
    coord:[1,2,3,4],
    situacao:"inábitavel",
    satelites:["Nenhum"]
};
planetSaving(planetinha);
updateSituation(planets,{name:"planetasso",situacao:"habitável"})
console.log(planets);
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const fetchGit = yield fetch("http://api.github.com/users/danielfalcaovt");
        const data = yield fetchGit.json();
        yield Promise.all([fetchGit, data]).then((values) => {
            console.log(values[1]);
        });
    });
}
;
fetchData();
