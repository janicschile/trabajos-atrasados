// Ejercicio #1
var h = [2,4,6,8,10];
for (var i = 0; i < h.length; i++) {
    console.log(i);
    console.log(h[i]);
}
//// h.length = 5
////En pantalla: 0,2,1,4,2,6,3,8,4,10


// Ejercicio #2
var j = [2,4,6,8,10];
for (var k = j.length - 1; k > 0; k--) {
    console.log(k);
    console.log(j[k]);
}
//// j.length = 5 --> en operacion es 4
//// En pantalla: 4,10,3,8,2,6,1,4
//// Posicion 0 no es menor.


// Ejercicio #3
var m = [2,4,6,8,10];
for (var n = 0; n < m.length; n += 2) {
    console.log(n);
    console.log(m[n]);
}
//// m.length = 5
//// En pantalla: 0,2,2,6,4,10



// Ejercicio #4
var p = [-1,0,5,-3,2];
for (var q = 0; q < p.length; q++) {
    if (p[q] < 0) {
        p[q] = "Dojo";
    }
}
console.log(p);
//// p.length = 5
//// En pantalla: [Dojo,0,5,Dojo,2] 




// Ejercicio #5
var r = [-1,0,5,-3,2];
for (var s = 0; s < r.length; s++) {
    if (r[s] > 0) {
        r[s] = r[s] * r[s];
    }
}
console.log(r);
//// r.length = 5
//// En pantalla: [-1,0,25,-3,4] 


// Ejercicio #6
var t = [];
for (var u = 0; u < 4; u++) {
    t.push(u);
}
console.log(t);
//// Variable t, tendra 4 datos.
//// en pantalla: [0,1,2,3]



// Ejercicio #6
var v = [1,2,3,4,5];
for (var w = 0; w < v.length; w++) {
    v.pop();
}
//console.log(v.length)
console.log(v);
//// Variable W        = 0 -> 1 -> 2 -> 3...
//// Variable v.length = 5 -> 4 -> 3 -> 2... Se termina ciclo for con v.length = 2
//// En pantalla: [1,2]