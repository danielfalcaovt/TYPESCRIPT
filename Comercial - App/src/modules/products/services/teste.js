const square = class{
  constructor(num1,num2) {
    this.num1 = num1;
    this.num2 = num2;
  };
  quadrado(){
    return this.num1 * this.num1;
  };
  soma(){
    return this.num1 + this.num2;
  };
  multiplicar(){
    return this.num1 * this.num2
  };
  fatorial(num){
    if ( num == 1 || num == 0 ) {
      return 1;
    }else{
      return num * this.fatorial(num-1);
    };
  };

  get sum(){
    return this.soma;
  };
  get square(){
    return this.quadrado;
  };
  get multiply(){
    return this.multiplicar;
  }
};
const xj6 = new square(2,5);
console.log(xj6.fatorial(5));
