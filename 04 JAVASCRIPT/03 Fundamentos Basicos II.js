// Ejercicio #1 - Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, 
////                              por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].
array = [-1,3,5,-5]
function big(){
    for(var i=0; i<array.length; i++) {
        if (array[i] > 0 ) {
            array[i] = "big"    
        }
        
        //console.log(array[i])
    }
    return array
}
console.log("Nuevo array al reemplazar positivos por big: " , big())
////
////



// Ejercicio #2 - Imprime (print) el menor, devuelve (return) el mayor - 
////              Crea una función que tome un array de números. 
////              La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 
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

    var menorHastaAhora = x[0];
    for (let j = 0; j < x.length; j++) {
        var posicionArr
        if ( menorHastaAhora >= x[j]) {
            var posicionArr = j
            var menorHastaAhora = x[j]           
        } else {
            var menorHastaAhora = x[posicionArr];
        }
    }
    console.log("El numero menor de la lista es:" , menorHastaAhora)
    return mayorHastaAhora;
}
console.log("El número mayor de la lista es:" , mayorElem([-3,3,5,7]) ); 
////
////



// Ejercicio #3 - Imprime (print) uno, devuelve (return) otro : Crea una función para un array de números. 
//                La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.

function imprimeDevuelve(arrayTres) {
    console.log("Penultimo valor de Array:", arrayTres[(arrayTres.length)-2])
    for (let i = 0; i < arrayTres.length; i++) {
        if ( Number.isInteger(arrayTres[i] / 2) ) {
            //console.log("Encontrado par: ", arrayTres[i])
        } else {
            return arrayTres[i]
        }
    }
}
arrayTres = [2,2,4,5,6,7,8,9]
console.log("Primer valor impar del Array:", imprimeDevuelve(arrayTres))
////
////




// Ejercicio #4 - Doble Visión : Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. 
//                               Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 
arrayDuplicado = []
function duplicado(arrayOriginal) {
    for (let i = 0; i < arrayOriginal.length; i++) {
        // console.log(arrayOriginal[i])
        arrayDuplicado.push(arrayOriginal[i]+arrayOriginal[i])
    }
    return arrayDuplicado
}
arrayOriginal = [1,2,3]
console.log("Valor del array duplicado:" , duplicado(arrayOriginal))
////
////




// Ejercicio #5 - Contar Positivos :  Dado un array de números, crea una función para reemplazar el último valor 
////              con el número de valores positivos encontrados en el array. 
////              Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].

function laSuma(arrayPositivos) {
    suma = 0
    for (let i = 0; i < arrayPositivos.length; i++) {
        if (arrayPositivos[i] > 0) {
            suma = (suma + arrayPositivos[i])
        }
    }
    arrayPositivos[arrayPositivos.length-1] = suma
    return arrayPositivos
}

arrayPositivos = [-1,1,1,1]
console.log(laSuma(arrayPositivos))
////
////




// Ejercicio #6 - Pares e Impares : Crea una función que acepte un array. 
////                                Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, 
////                                y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.


function imprimeDevuelve(arrayAlaraco) {
    controlPar = 0
    controlImpar = 0
    for (let i = 0; i < arrayAlaraco.length; i++) {
        if ( Number.isInteger(arrayAlaraco[i] / 2) ) {
            //console.log("Encontrado par: ", arrayAlaraco[i])
            controlPar++
            controlImpar = 0
            //console.log("Suma Constrol PAr" , controlPar)
            if (controlPar == 3) {
                console.log("¡Es para bien!")
                controlPar = 0
            }
        } else {
            //console.log("Encontrado impar: ", arrayAlaraco[i])
            controlImpar++
            controlPar = 0
            //console.log("Suma Constrol Impar" , controlPar)
            if (controlImpar == 3) {
                console.log("¡Qué imparcial!")
                controlImpar = 0
            }
        }
    }
    return arrayAlaraco
}

arrayAlaraco = [1,2,3,4,5,5,5,6,7,8,8,8,9]
console.log("Aviso:", imprimeDevuelve(arrayAlaraco))
////
////





// Ejercicio #7 - Incrementa los Segundos : Dado un array de números llamado arr, 
////                                        suma 1 a los elementos, 
////                                        específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). 
////                                        Luego, imprime (console.log) cada valor del array y devuelve el arreglo arr. 

function imprimeDevuelve(arrayPares) {
    for (let i = 0; i < arrayPares.length; i++) {
        if ( Number.isInteger(arrayPares[i] / 2) ) {
            //console.log("Encontrado par: ", arrayPares[i])
        } else {
            //console.log("Encontrado impar: ", arrayPares[i])
            arrayPares[i]++
        }
    }
    for (let x = 0; x < arrayPares.length; x++) {
        console.log("Posicion en el Array #["+(x)+"]: ", arrayPares[x])
        
    }
    return arrayPares
}

arrayPares = [1,2,3,4,5,6,7,8,9]

console.log("Datos del Array:", imprimeDevuelve(arrayPares))




// Ejercicio #8 - Longitudes previas : Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) 
////                                   que contiene strings, reemplaza cada string con un número de acuerdo cantidad 
////                                   de letras (longitud) del string anterior. 
////                                   Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) 
////                                   debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?
////
//// apoyos de codigo
// longitudesPrevias = ["programar", "dojo", "genial"]
// console.log(longitudesPrevias)
// console.log(longitudesPrevias.length)
// console.log(longitudesPrevias[0])
// console.log(longitudesPrevias[longitudesPrevias.length -1])
// console.log(longitudesPrevias[longitudesPrevias.length -1].length)

function chanfleLoop(longitudesPrevias) {
    for (let i = longitudesPrevias.length-1; i > 0; i--) {
        longitudesPrevias[i] = longitudesPrevias[i -1].length
    }
    return longitudesPrevias
}
longitudesPrevias = ["programar", "dojo", "genial", "Coding", "Dojo"]
console.log(chanfleLoop(longitudesPrevias))
////
////



// Ejercicio #9 - Agrega Siete : Construye una función que acepte un array. 
//                               Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. 
//                               No alteres el array original. 
//                               Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 
arrayPorSiete = []
function duplicado(arrayOriginal) {
    for (let i = 0; i < arrayOriginal.length; i++) {
        // console.log(arrayOriginal[i])
        arrayPorSiete.push(arrayOriginal[i] + 7)
    }
    return arrayPorSiete
}
arrayOriginal = [1,2,3]
console.log("Valor del array duplicado:" , duplicado(arrayOriginal))
////
////



// Ejercicio #10 - Array Inverso : Dado un array, escribe una función que invierte sus valores en el lugar. 
////                               Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, 
////                               es decir [2,4,6,1,3]. 
////                               Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).

invertir = [3,1,6,4,2]

for (let i = 0; i < invertir.length-1; i++) {
    tempi = 0
    temp[i] = invertir[i]
}
for (let i = 0; i < invertir.length-1; i++) {
    console.log(temp[i])
}

var arr = [1,3,5,7];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;






Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].
Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 
Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. 
Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].
