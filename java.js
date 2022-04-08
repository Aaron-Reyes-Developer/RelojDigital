function reloj(){


    let time = new Date();

    let horas = time.getHours().toString().length < 2? "0" + time.getHours() : time.getHours();
    let minutos = time.getMinutes().toString().length < 2? "0" + time.getMinutes() : time.getMinutes();
    let segundos = time.getSeconds().toString().length < 2? "0" + time.getSeconds() : time.getSeconds();


    let mainTime = horas + ":" + minutos +":"+segundos;

    document.getElementById("h1").innerHTML = mainTime;
}

setInterval(()=> {
    reloj();
},1000)

//CAMBIAR EL COLOR DE LAS LETRAS
function cambiarColor(){
    document.getElementById("main").classList.toggle("colorMain");
    document.getElementById("h1").classList.toggle("colorH1");

}

//SALIR DE PATANTALLA COMPLETA
function salir_pantalla(){
    
    document.exitFullscreen();
    document.getElementById('boton_salir').classList.remove('salir_active');
    
    
}