function contador() {
    for (var num = 0; num <= 5; num = num++) {
        console.log(num);
    }
}
contador();    // ejecuta la función
contador();    // ejecuta la función nuevamente

function crearArreglo(num) {    
    var nuevoArreglo = [];    
    for (var i = 0; i <= num; i++) {        
        nuevoArreglo.push(i);    
    }
}
crearArreglo(5);


function a() {
    console.log(25)
}
a();