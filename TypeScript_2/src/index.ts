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

async function fetchData(){
    const fetchGit = await fetch("http://api.github.com/users/danielfalcaovt");
    const data = await fetchGit.json();
        await Promise.all([fetchGit,data]).then((values)=>{
            console.log(values[1]);    
        })
};

fetchData()