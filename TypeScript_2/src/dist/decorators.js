"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        descriptor.value = function (...args) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(`The console is running the method ${key} with args ${JSON.stringify(args)}`);
                // MODIFICAMOS O DESCRIPTOR PARA QUE RODE DENTRO DO DECORATOR
                const result = yield oldFunc.apply(this, args);
                // APPLY E UM METODO EM QUE CHAMA UMA FUNÇAO (THIS ESTA SE REFERINDO A oldFunc) COM O SEGUNDO PARAMETRO SENDO O CONSTRUCTOR()
                console.log(`The console obtained that: \n ${JSON.stringify(result)}`);
                return result;
                //RETORNAMOS O RESULTADO PARA SER UTILIZADO DEPOIS
            });
        };
    };
}
function Deco() {
    return function (target, key, descriptor) {
        descriptor.value = function (valor) {
            return valor ** 2;
        };
    };
}
class mathematic {
    constructor(num) {
        this._num = num;
    }
    ;
    multi(valor) {
        return valor * 2;
    }
    sum(valor) {
        return valor * 2;
    }
}
__decorate([
    Deco()
], mathematic.prototype, "multi", null);
__decorate([
    Log()
], mathematic.prototype, "sum", null);
const test = new mathematic(4);
console.log(test.sum(5));
