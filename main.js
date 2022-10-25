const carrusel = document. querySelector(" .carrusel-items "); 
let maxscrollLeft = carrusel.scrollWidth - carrusel.clientWidth; 
let intervalo = null; 
let step = 1; 

const start = () =>  intervalo = setInterval (function () { carrusel.scrollLeft = carrusel.scrollLeft + step; 

}, 10) 

if (carrusel.scrollLeft === max.scrollLeft) {
    step= step *-1;  
}

else if (carrusel.scrollLeft === 0) {
   step= step *-1;  
}



const stop = () => { clearInterval (intervalo); 

}; 

start (); 

carrusel.addEventListener ('mouseover', () =>{
    stop (); 
})

carrusel.addEventListener ('mouseout', () =>{
    start (); 
})