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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
/*
async function fetchData(){
    const fetchGit = await fetch("http://api.github.com/users/danielfalcaovt");
    const data = await fetchGit.json();
        await Promise.all([fetchGit,data]).then((values)=>{
            return values[1];
        });
};

interface HomoSapiens extends man{
    end?:`Always the end`
}

type X = {
    favoriteSong:'Dancing in the dark',
    dream:'be rich.'
};

fetchData();

//omit e pick


type localGit = Pick<X,'favoriteSong'>;
 */
_.capitalize('fuck you');
