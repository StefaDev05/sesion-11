let numero_random = Math.floor(Math.random() * 10) + 1;
let numero_usuario = prompt("Adivina un número entre 1 y 10");
if(numero_usuario==numero_random){
    document.write("Felicidades, adivinaste el número!");
}else {
    document.write("Lo siento, el número era ", numero_random);
}