var x = 25;
if (x > 50) {
    console.log("mayor que 50");
}
else {
    console.log("menor que 50");
}
// Como x no es mayor que 50, la segunda instrucción de console.log, "menor que 50", es la única que se ejecuta.



var x = 25;
if (x > 100) {
    console.log("mayor que 100");
}
else if (x > 50) {
    console.log("mayor que 50");
}
else {
    console.log("número pequeño");
}
// como ni la primera ni la segunda sentencia son true, se imprime "número pequeño" en la consola.

//// OperadoR Descripción	            Ejemplos
//// ==	igual	            1 == 2 => false;    1 == 1 => true
//// !=	diferente	        1 != 2 => true;     1 != 1 => false
//// >	mayor que	        1 > 2 => false;     2 > 1 => true
//// <	menor que	        1 < 2 => true;      2 < 1 => false
//// >=	mayor o igual que	1 >= 2 => false;    2 >= 2 => true
//// <=	menor o igual que	1 <= 2 => true;     2 <= 2 => true
