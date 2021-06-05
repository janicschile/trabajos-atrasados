// Ejercicio #1 - Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.
function a(){
    array = [];
    for(var i=1; i<=255; i++) {
        array.push(i)
    }
   return array;
}

console.log(a());
array =  a()
console.log(" Ultimo valor del array: " , array[254]);
//// 



// Ejercicio #2 - Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000
//                Puedes usar un operador de módulo para este ejercicio. 
function a(){
    sumapares = 0;
    for(var i=2; i<=1000; i+=2) {
        sumapares = sumapares + i;
        //console.log(i)
    }
   return sumapares;
}

console.log("  Suma Total 0 al 1000 en pares: " , a());
////


// Ejercicio #3 - Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).
function a(){
    sumaimpares = 0;
    for(var i=1; i<5000; i+=2) {
        sumaimpares = sumaimpares + i;
        //console.log(i)
    }
   return sumaimpares;
}

console.log("  Suma Total 0 al 5000 en impares: " , a());
////



// Ejercicio #4 - Escribe una función que devuelva la suma de todos los valores dentro de un array 
//                (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 
array = [1,2,5]
function sumaArray(){
    suma = 0;
    for(var i=0; i<array.length; i++) {
        suma = suma + array[i];
        //console.log(array[i])
    }
   return suma;
}

console.log(" La suma de array es: " , sumaArray());
////


// Ejercicio #5 - Dado un array con múltiples valores, 
//                escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 
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
console.log("El número mayor (max) es:" , mayorElem([-3,3,5,7]) ); 
////



// Ejercicio #6 - Dado un array con múltiples valores, 
//                escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2)
array = [1,3,5,7,20]
function promArray(){
    suma = 0;
    for(var i=0; i<array.length; i++) {
        suma = suma + array[i];
        //console.log(array[i])
    }
   return (suma/array.length);
}

console.log(" El promedio del array es: " , promArray());
////



// Ejercicio # 7 - Array de impares: Escribe una función que devuelva un array de 
//                 todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.
function a(){
    array = [];
    for(var i=1; i<=50; i+=2) {
        array.push(i)
    }
   return array;
}

console.log(a());
////




// Ejercicio #8 - Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. 
//                Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, 
//                esto son 5 y 7). 
array = [1,3,5,7]
function mayores(compara){
    cantidad = 0;
    for(var i=0; i<array.length; i++) {
        if (compara < array[i]) {
            cantidad = cantidad + 1;
            //console.log("Sumado")
        }
    }
   return cantidad;
}
console.log("Cantidad de valores mayores al consultado: " , mayores(3))
////




// Ejercicio #9 - Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado 
//                del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).
array = [1,5,10,-2]
function cuadrado(){
    for(var i=0; i<array.length; i++) {
        array[i] = (array[i] * array[i] )
        //console.log(array[i])
    }
    return array
}
console.log("Nuevo array al cuadrado: " , cuadrado())
////




// Ejercicio #10 - Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo 
//                 dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos 
//                 (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).
array = [1,5,10,-2]
function negativo(){
    for(var i=0; i<array.length; i++) {
        if (array[i] < 0 ) {
            array[i] = 0    
        }
        
        //console.log(array[i])
    }
    return array
}
console.log("Nuevo array al reemplazados negativos a 0: " , negativo())
////


// Ejercicio #11 - Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo 
//                 contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
array = [1,5,10,-2]
newArray = []
function MaxMinAvg() {
    
    var mayorHastaAhora = array[0];
    var menorHastaAhora = array[0];
    promedio = 0;
    
    for (let i = 0; i < array.length; i++) {
        var posicionArr       
        if ( mayorHastaAhora <= array[i]) {
            var posicionArr = i
            var mayorHastaAhora = array[i]           
        } else {
            var mayorHastaAhora = array[posicionArr];
        }
    }

    for (let i = 0; i < array.length; i++) {
        var posicionArr       
        if ( menorHastaAhora >= array[i]) {
            var posicionArr = i
            var menorHastaAhora = array[i]           
        } else {
            var menorHastaAhora = array[posicionArr];
        }
    }

    for (let i = 0; i < array.length; i++) {
        promedio = promedio + array[i] 
    }

    newArray[0] = mayorHastaAhora 
    newArray[1] = menorHastaAhora
    newArray[2] = (promedio / array.length)
    return newArray
}
console.log("El array tiene como valores:" , MaxMinAvg() ); 
////



// Ejercicio #12 - Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. 
//                 La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 
array = [1,5,10,-2]
function invierte(){
    valor1 = array[0];
    valor2 = array[(array.length - 1)];
    array[0] = valor2
    array[(array.length - 1)] = valor1

    return array
}
console.log("Nuevo array al cuadrado: " , invierte())
////




// Ejercicio #13 - De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo 
//                 por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].
array = [-1,-3,2]
function dojo(){
    for(var i=0; i<array.length; i++) {
        if (array[i] < 0 ) {
            array[i] = "Dojo"    
        }
        
        //console.log(array[i])
    }
    return array
}
console.log("Nuevo array al reemplazar negativos por dojo: " , dojo())
////