let count = 0;
let id = setTimeout(() => {
    count++
}, 0);

console.log(count);

clearTimeout(id);

/*
    A: 0
    B: 1
    C: undefined
    D: Erro

*/