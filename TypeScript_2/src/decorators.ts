/* function superSum() {
    return function(target,key,descriptor){
            descriptor.value = function (num1:number) {
                console.log(`ELEVANDO ${num1} AO CUBO.`);
                return num1 ** 3;
            }
    }
}

class namae {
    private _name:string

    constructor(name:string){
        this._name = name;
    };

    get name() {
        return this._name;
    };

    set name(name:string) {
        this._name = name;
    };
    
    length():number | undefined {
        return this._name.length
    }

    @superSum();
    sum(num1:number) {

        return num1 * 2;
    }
}

const newPlayer = new namae("DANIEL");

console.log(newPlayer.sum(3));
 */
// DECORATOR LOG, AONDE ADICIONO UMA FUNÇAO ADICIONAL ANTES DA MINHA FUNÇAO PRINCIPAL SER ACIONADA NA CLASSE
function Log() {
    return function (target, key, descriptor) {
        //O PARAMETRO DESCRIPTOR E TUDO OQUE HAVIA DENTRO DA FUNÇAO ANTIGA.
        const oldFunc = descriptor.value;
        // CONSERVAMOS A FUNÇAO EM UMA CONSTANTE PARA PODER UTILIZAR O DESCRIPTOR A VONTADE
        descriptor.value = async function (...args:any[]) {
            console.log(`The console is running the method ${key} with args ${JSON.stringify(args)}`);
            // MODIFICAMOS O DESCRIPTOR PARA QUE RODE DENTRO DO DECORATOR
            const result = await oldFunc.apply(this, args);
            // APPLY E UM METODO EM QUE CHAMA UMA FUNÇAO (THIS ESTA SE REFERINDO A oldFunc) COM O SEGUNDO PARAMETRO SENDO O CONSTRUCTOR()
            console.log(`The console obtained that: \n ${JSON.stringify(result)}`);

            return result;
            //RETORNAMOS O RESULTADO PARA SER UTILIZADO DEPOIS
        }
    }
}

function Deco(){
    return function(target,key,descriptor){
        descriptor.value = function (valor:number) {
            return valor ** 2;
        }
    }
}

class mathematic {
    private _num:number

    constructor(num:number){
        this._num = num;
    };

    @Deco()
    multi(valor:number) {
        return valor * 2
    }

    @Log()
    sum(valor:number) {
        return valor * 2;
    }
}

const test = new mathematic(4);

console.log(test.sum(5));