let count = 0
let intervalo = setInterval(() => {
    //aparecer div
    count++
    if ( count == 5) {
        console.log("PROMOTION NEW OFFER 100% OFF ");
        clearInterval(intervalo)

    }
}, 1000);
