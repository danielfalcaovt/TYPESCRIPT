/* const strength = 80;
const buff = 10;

function buffing(attr, buff){
    new Promise((resolve, reject)=>{
        attr += buff;
        if (strength > 80){
            console.log("Voce pode entrar na area.");
            resolve(attr);
        }else{
            console.log("Voce e fraco, rala!");
            reject("foda-se");
        }
    });
};

buffing(80,10) */


/*let poder = 10;
let strengthBuff = 20;
const taFicandoMonstro = (poder,buff) => {
    return new Promise((resolve,reject)=>{
        let poderVelho = poder;
        poder += buff;
        if (poder == poderVelho){
            console.log("Q Merda em");
            reject("Buff nao funcionou.")
        }else{
            console.log("TA FICANDO MONSTRO BIRL PORRA.");
            resolve(poder);
        }
    });
};

taFicandoMonstro(poder,strengthBuff).then((novoPoder)=>{
    poder = novoPoder;
    console.log(poder);
}); */

let programming = [
    {
        name:'JavaScript',
        engine:'V8',
        velocity:10
    },
    {
        name:'C',
        engine:'C',
        velocity:11
    }
]

const fusionOfLanguages = (arr,test) => {
    return new Promise((resolve,reject)=>{
        let vel = 0
        let oldValue = test.velocity;
        arr.forEach((language)=>{
            vel += language.velocity;
        });
        if (vel == oldValue){
            reject("Deu erro sa porra");
        }else{
            console.log(vel);
            resolve(vel);
        }
    })
};
fusionOfLanguages(programming,programming[0]).then((newVelocity)=>{
    programming[2] = {}
    programming[2].name = 'CScript';
    programming[2].engine = 'FUDEU MENOR';
    programming[2].velocity = newVelocity
}).then(()=>{
    console.log(programming);
});