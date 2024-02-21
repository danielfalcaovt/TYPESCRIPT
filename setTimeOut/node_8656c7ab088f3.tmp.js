let count = 0
let intervalo = setInterval(() => {
    //aparecer div
    count++
}, 1000);

if ( count == 5) {
    clearInterval(intervalo)
}