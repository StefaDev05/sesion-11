let monto = parseInt(prompt("Digite el monto total de su compra"));
 
if(monto > 100 ){
    let monto_con_descuento = monto * 0.9;
    document.write("¡Su compra tiene un descuento del 10%! Monto con descuento: ", monto_con_descuento, "<br>" )
}else {
    document.write("Su compra no aplica para el descuento. Monto: ", monto, "<br>")
}