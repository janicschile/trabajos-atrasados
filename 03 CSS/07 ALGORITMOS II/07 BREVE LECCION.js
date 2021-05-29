// Ejercicio #1
function a() {
console.log('hello');
}
console.log('Dojo');

//// Muestra en pantalla: Dojo
//// No existe llamada a funcion a()



// Ejercicio #2
function a(){
    console.log('hello');
    return 15;
}
x = a();
console.log('x is', x);
//// Muestra en pantalla: hello, x is 15


// Ejercicio #3
function a(n){
    console.log('n is', n);
    return n+15;
}
x = a(3);
console.log('x is', x);
//// Muestra en pantalla: n is 3, x is 18


// Ejercicio #4
function a(n) {
    console.log('n is', n);
    y = n*2;
    return y;
}
x = a(3) + a(5);
console.log('x is', x);
//// Muestra en pantalla:
//// n is 3   //--> y=6
//// n is 5   //--> y=10
//// x is 16


// Ejercicio #5
function op(a,b) {
    c = a+b;
    console.log('c is', c);
    return c;
}
x = op(2,3) + op(3,5);
console.log('x is', x);
//// Muestra en pantalla:
//// c is 5   //--> 5
//// c is 8   //--> 8
//// x is 13


// Ejercicio #6
function op(a,b) {
    c = a+b;
    console.log('c is', c);
    return c;
}
x = op(2,3) + op(3,op(2,1)) + op(op(2,1), op(2,3));
console.log('x is', x)
//// Muestra en Pantalla:
//// c is 5   //--> 5
//// c is 3   //--> op(3,3)
//// c is 6   //--> 6
//// c is 3   //--> op(3,op(2,3))
//// c is 5   //--> op(3,5)
//// c is 8   //--> 8
//// x is 19


// Ejercicio #7
var x = 15;
function a() {
    var x = 10;
}
console.log(x);
a();
console.log(x);
//// Muestra en Pantalla: 15, 15
//// No hay return en la funcion 