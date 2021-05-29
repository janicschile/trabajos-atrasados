// Ejercicio #1
function a() {
    console.log('hola');
}
console.log('Dojo');
//// En pantalla: Dojo
//// Funcion no es llamada.



// Ejercicio #2
function b() {
    console.log('hola');
    return 15;
}
var x = b();
console.log('x es', x);
//// var x = 15
//// En pantalla: hola, x es 15



// Ejercicio #3
function a(n) {
    console.log('n es', n);
    return n+15;
}
var x = a(3);
console.log('x es', x);
//// En var x, se guarda la funcion a(3)
//// Variable n = 3
//// Return 3+15
//// En pantalla: n es 3, x es 18



//ejercicio #4
var z = 15;
console.log(z);
function a(z){
   console.log(z);   
   return z;
}
var b = a(10);
console.log(b);
console.log(z);
//// muestra 15
//// Guarda en variable b llamada a funcion a con valor 10
//// funcion a --> z = 10, muestra 10, return 10
//// Muestra variable b
//// muestra variable z
//// En pantalla: 15, 10, 10, 15 


// Ejercicio #5
var c = 15;
console.log(c);
function d(c){
   console.log(c);   
   return c*2;
}
var e = d(10);
console.log(e);
console.log(c);
//// Muestra 15
//// Guarda en variable e llamada a funcion d con valor 10
//// funcion d --> c = 10, muestra 10, return 20
//// Muestra variable e
//// muestra variable c
//// En pantalla: 15, 10, 20, 15 



// Ejercicio #6
function a(n) {
    console.log('n es', n);
    y = n*2;
    return y;
}
var x = a(3) + a(5);
console.log('x es', x);
//// Guarda en variable x una doble llamada a funcion:
//////// Resuelve a(3) --> Muestra en pantalla: n es 3, guarda variable y con valor 3*2= 6 y retorna resultado de y, que es 6.
//////// Resuelve a(5) --> Muestra en pantalla: n es 5, guarda variable y con valor 5*2= 10 y retorna resultado de y, que es 10.
//// Muestra en pantalla el valor de x que es el resultado de a(3) + a(5) = 16
//// En pantalla: nes 3, nes 5, x es 16


// Ejercicio #7
function x(num1, num2) {  
    return num1+num2;
 }
 console.log(x(2,3))
 console.log(x(3,5))
 //// Muestra en pantalla: 5, 8



 // Ejercicio #8
 function y(num1, num2) {
    console.log(num1);   
    return num1+num2;
 }
 console.log(y(2,3))
 console.log(y(3,5))
 //// Muestra en pantalla: 2, 5, 3, 8



// Ejercicio #9
function z(a,b) {
    var c = a + b;
    console.log('c es', c);
    return c;
}
var x = z(2,3) + z(3,5);
console.log('x es', x);
//// Variable x llama 2 veces a la funcion.
//////// z(2,3) -->  c = 2+3  --> Muestra en pantalla : c es 5
//////// z(3,5) -->  c = 3+5  --> Muestra en pantalla : c es 8
//// Variable  x = 5 + 8 
//// Muestra en pantalla: c es 5, c es 8 , x es 13



// Ejercicio #10
function d(a,b) {
    var c = a + b;
    console.log('c es', c);
    return c;
}
var x = d(2,3) + d(3,d(2,1)) + d(d(2,1),d(2,3));
console.log('x es', x);
//// Variable x llama 6 veces a la funcion d.
//////// d(2,3)    +   d(3,d(2,1))   +   d(d(2,1),d(2,3));
//////// bloque 1       bloque 2          bloque 3
//////// bloque 1: d(2,3) --> c = 5, muestra en pantalla: c es 5, retorna 5
//////// bloque 2: d(3,d(2,1)) --> d(2,1) --> c = 3, muestra en pantalla: c es 3, retorna 3
//////// bloque 2: d(3,3) --> c = 6, muestra en pantalla: c es 6, retorna 6
//////// bloque 3: d(d(2,1),d(2,3)) --> d(2,1) --> c = 3, muestra en pantalla: c es 3, retorna 3
//////// bloque 3: d(d(2,1),d(2,3)) --> d(2,3) --> c = 5, muestra en pantalla: c es 5, retorna 5
//////// bloque 3: d(3,5) --> c = 8, muestra en pantalla: c es 8, retorna 8
//// Variable  x = 5 + 6 + 8 
//// Muestra en pantalla: c es 5, c es 3, c es 6, c es 3, c es 5, c es 8 , x es 19