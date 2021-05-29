a = 35;
console.log("Primer Valor: " + a)
function hello(a) {
    console.log("Primer Valor fn: " + a)
    console.log("Segundo Valor fn: " + a)
    return a
}
console.log("Segundo Valor: " + a);
hello(a);
b = hello(a + 10);
console.log("Primer Valor rtn: " + (b+10));