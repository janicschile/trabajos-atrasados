function multiplo(a,b) {
    console.log("MUltiplo:" + a*b)
    return a*b
}
function cuadrada(n) {
    console.log("Cuadrado:" + multiplo(n,n))
    return multiplo(n,n)
}
function cube(x) {
    console.log("Cubo:" + multiplo(cuadrada(x),x))
    return multiplo(cuadrada(x),x)
}

var cuberResultado = cube(3);
console.log(cuberResultado);