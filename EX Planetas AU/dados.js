import process from "process";

process.stdout.write("QUAL TEU NOME ???? :\n");
process.stdin.on("data",(keyboard)=>{
    if (String(keyboard) == "meu nome e julia"){
        process.stdout.write("TAN TAN TAN TAN TAN ATN TANTANTAN");
    }else{
        process.stdout.write("Aff!");
    }

    process.exit();
});