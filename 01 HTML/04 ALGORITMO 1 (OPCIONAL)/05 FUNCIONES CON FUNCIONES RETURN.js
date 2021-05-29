function totalComida(bill) {
    //console.log(bill*1.2)
    return (bill*1.2);
}
var thaiFood = 150;
var group = 4;
var total = totalComida(thaiFood);
console.log("Subtotal:", thaiFood);
console.log("Propina:", + total-thaiFood);
console.log("Total Venta c/ Propina:", + total);
console.log("Cuenta dividida entre", group , "Personas:", + total/group,"C/U");