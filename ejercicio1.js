let calificacion=parseInt(prompt("Ingrese su calificación"));
if(calificacion>=90){
    console.log("Aprobado con honores");
    document.write("Aprobó con honores");
}else if (calificacion>=70){
    console.log("Aprobó");
    document.write("Aprobó");
}
else{
    console.log("Reprobó");
    document.write("Reprobó");
}