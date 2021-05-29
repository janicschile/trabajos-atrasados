// EJERCICIO #1
for(var i=0; i<5;i++){   
    console.log(i);
 }
//// Del 0 al 4... no llega a 5 porque i<5 (menor a 5, no igual o menor a 5)



// EJERCICIO #2
for(var i=1; i<15; i++)
{
   i = i + 1;  
   console.log(i);
}
//// Aqui, al partir de 0, sumando 1 al ciclo for
//// y sumando 1 a variable i dentro del ciclo for
//// el ciclo suma 2 numeros a variable i, depende de la declaracion de i=?
//// en el ciclo for para que los resultados sean impares o pares.
//// var i=0 impares, var i=2 pares



// EJERCICIO #3
for(var i=0; i<15; i++)
{
   i = i + 3; 
   console.log(i);
}
//// Comienzo por 0, suma 3
//// proximo ciclo for suma 1 y dento del ciclo vuelve a sumar 3... 
//// resultado: 1 ciclo, son 3, segundo ciclo son 7... suma 4 en cada ciclo.



// EJERCICIO #4
function y(num1, num2){   
   return num1+num2;
}
console.log(y(2,3))
console.log(y(3,5))
//// Suma los valores ingresados en la funcion, devueltos por el parametro return e ingresados desde 
//// la solicitud console.log(y(x,x))


// EJERCICIO #5
function y(num1, num2){
   console.log(num1);   
   return num1+num2;
}
console.log(y(2,3))
console.log(y(3,5))
//// Suma los valores ingresados en la funcion, devueltos por el parametro return e ingresados desde 
//// la solicitud console.log(y(x,x)), tambien muestra en pantalla al llamar a la funcion y, el valor de num1



// EJERCICIO #5
a = 15;
console.log(a);
function y(a){
   console.log(a);   
   return a;
}
b = y(10);
console.log(b);
//// se muestra valor de variable a 15..
//// se guarda en variable b, datos enviados a la funcion que es 10
//// en la funcion, muestra el valor de la variable que es 10
//// luego return responde a la variable b el valor de la variable interna a, que es el mismo valor 10
//// se muestra el valor de variable b

// EJERCICIO #6
a = 15;
console.log(a);
function y(a){
   console.log(a);   
   return a*2;
}
b = y(10);
console.log(b);
//// se muestra valor de variable a 15 ..
//// se guarda en variable b, datos enviados a la funcion que es 10
//// en la funcion, muestra el valor de la variable que es 10
//// luego return responde a la variable b el valor de la variable interna a*2, que da como resultado 20
//// se muestra el valor de variable b 20


