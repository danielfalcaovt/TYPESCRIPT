import fs from "fs";

fs.writeFile("text.txt","Mano, salve pros maloca aqui e cria rapa ainda ne segredo",(err)=>{
    //writeFile = reescreve o conteudo inteiro
    console.log(err);
});

fs.appendFile("text.txt","\n  AINDA CRIA NE SEGREDO HAHA Foda-se",(err)=>{
    //appendFile = escreve um conteudo adicional (caso ja tenha algum).
    console.log(err);
})