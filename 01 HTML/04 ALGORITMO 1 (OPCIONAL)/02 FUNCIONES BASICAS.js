function printValues() {
    console.log("El valor de a: ", a)
    console.log("El valor de b: ", b)
}

var a = 7;
var b = 87;
printValues();

a += 5;
a *= 30;
b *= a;
printValues();
a /= 3;
b /= a;
printValues();
a *= 27;
b *= 13;
printValues();