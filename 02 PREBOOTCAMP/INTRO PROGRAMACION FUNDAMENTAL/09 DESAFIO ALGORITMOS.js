// Ejercicio #1
function imprimeHasta(x) {
    if (x <= 0) {
        return false
    } else {
        for (let i = 1 ; i <= x ; i++) { 
            console.log(i)
        }
    }

}
imprimeHasta(10); // debe imprimir todos los enteros desde el 1 hasta el 1000000
y = imprimeHasta(0); 
console.log(y); // debe imprimir false
//// Primero comprobamos el valor de x que sea menor o igual a 0, si se cumple, devuelve false, si no, ejecuta funcion for



// Ejercicio #2
function printSum(x) {
    var sum = 0;
    for (let i = 0 ; i <= x ; i++) { 
        console.log(i)
        sum = sum + i
    }   
    return sum
}
y = printSum(255) // debe imprimir todos los enteros desde el 0 hasta el 255, y la suma parcial en cada punto
console.log(y) // debe imprimir 32640
//// 



// Ejercicio #3
function printSumArray(x) {
    var sum = 0;
    sum = x[0] + x[1] + x[2]
    return sum;
}
console.log( printSumArray([1,2,3]) ); // debe imprimir 6
////



// Ejercicio #4
function mayorElem(x) {
    var mayorHastaAhora = x[0];
    for (let i = 0; i < x.length; i++) {
        var posicionArr       
        if ( mayorHastaAhora <= x[i]) {
            var posicionArr = i
            var mayorHastaAhora = x[i]           
        } else {
            var mayorHastaAhora = x[posicionArr];
        }
    }
    return mayorHastaAhora;
}
console.log( mayorElem([8,3,11,2,-8]) ); // debe imprimir 11
/////