// Actividad #1
function multiply(x,y) {
    console.log(x);
    console.log(y);
}
b = multiply(2,3);
console.log(b);
//// Muestra en pantalla: 2,3,undefined
//// No existe funcion return


// Actividad #2
function multiply(x,y) {
    return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));
//// Muestra en pantalla: 6,10
//// Consol.log pide a variable b, luego pide directamente.

// Actividad #3
var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++) {
   i = i + 3; 
   console.log(i);
}
//// Muestra en pantalla: 3, 7


// Ejercicio #4
var x=15;
console.log(x);
function awesome(){
    var x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);
//// Muestra en Pantalla: 15, 15, 10,15



// Ejercicio #5
for(var i=0; i<15; i+=2) {
    console.log(i);
}
//// Muestra en pantalla: 0,2,4,6,8,10,12,14



// Ejercicio #6
for(var i=0; i<3; i++) {
    for(var j=0; j<2; j++) {
        console.log(i*j);
    }
}
//// Muestra en pantalla: 0,0,0,1,0,2



// Ejercicio #7
function looping(x,y) {
    for(var i=0; i<x; i++) {
       for(var j=0; j<x; j++) {    
           console.log(i*j);
       } 
    }
}
z = looping(3,3);
console.log(z);
// Muestra en pantalla: 0,0,0,0,1,2,0,2,4



// Ejercicio #8
function looping(x,y) {
    for(var i=0; i<x; i++) {
        for(var j=0; j<y; j++) {      
        console.log(i*j);
        } 
    }
return x*y;
}
z = looping(3,5);
console.log(z);
//// Muestra en pantalla: 0,0,0,0,0,0,1,2,3,4,0,2,4,6,8,15





//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
/////////////////    PARTE 2
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


// Print 1 to x
function printUpTo(x) {
    if (x > 0) {
        for (let i = 1; i <= x; i++) {
            console.log(i)     
        }
    } else {
        console.log("Ingresado Numero Negativo")
        return false
    }
}
printUpTo(1000); // debería imprimir todos los enteros de 1 to 1000
y = printUpTo(-10); // debería imprimir false
console.log(y); // debería imprimir false
////


// PrintSum
function printSum(x) {
    var sum = 0;
        for (let i = 0; i <= x; i++) {
            sum = i + sum  
            console.log(sum)       
        }//your code here
    return sum
}
y = printSum(255) // debería imprimir todos los enteros de 0 a 255 y que cada entero imprima la suma parcial.
console.log(y) // // debería imprimir 32640



//PrintSumArray
function printSumArray(x) {
    var sum = 0;
    for(var i=0; i<x.length; i++) {
      sum = sum + x[i]
    }
    return sum;
}
console.log( printSumArray([1,2,3]) ); // debería imprimir 6


// Desafio
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
console.log( "El mayor valor de la lista es:" , mayorElem([1,30,5,7]) );
  









var msg1 = "hello";
var msg2 = "world!";
for(var num1=1; num1<=msg1.length; num1++)
{
    for(var num2=1; num2<=msg2.length; num2++)
    {
        if(num1 != 4)
        {
            console.log(num1,"-",num2,":",msg1.length+msg2.length);
        }
    }
}