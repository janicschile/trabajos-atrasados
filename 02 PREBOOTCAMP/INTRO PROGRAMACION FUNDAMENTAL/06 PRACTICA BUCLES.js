// Ejercicio #1
var a = 2;
while (a < 16) {       
    console.log(a);    
    a = a * 2;
}
//// Ejecuta bucle segun variable a sea menor que 16 y luego muestra en pantalla el valor, para finalente multiplicar x 2
//// entregando por consola los valores de 2,4,8


// Ejercicio #2
var b = 2;
while (b < 30) {       
    if (b > 10) {        
        b = b + 6;    
    }    
    b += 3;
}
console.log(b);
//// Se asigna a variable b el valor de 2
//// Se Ejecuta un bucle mientras variable b sea menor que 30
///////  Dentro del bucle se establece una condicion, si b es menor a 10 , se establece un nuevo valor para variable b, a si misma se suma 6
//// Suma 3 a la variable b
//// Resultados en pantalla: 38


// Ejercicio #3
var c = 50;
while (c > 0) {       
    if (c > 47) {        
        c--;    
    }    
    else {         
        c -= 20;    
    }
}
console.log(c);
//// Se asigna a variable c el valor de 50
//// Se Ejecuta un bucle mientras variable c sea mayor que 0
///////  Dentro del bucle se establece una condicion, si c es mayor a 47 , restamos 1 a c y en caso contrario restamos 20 a c
//// Resultados en pantalla: -13