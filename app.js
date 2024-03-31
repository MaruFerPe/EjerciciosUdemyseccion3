let camisa = 500.00
let edad = 25
const velocidadLuz = 2.998*10**8 + " m/s"
let slogan = "Let's do it"
const impuesto = 0.70 + "%"
let radioEstrella = 468346864571
let eficiencia = ["A","B","C"]
const gravedad = 9.80665 + "m/s-2"

function validacion(resultado) {
    if(resultado== true) {
        console.log("El resultado es correcto");
    } else {
        console.log("El resultado es incorrecto");
    }
}

console.log("El precio de la camisa es "+ camisa);
console.log("Tienes una edad de "+edad);
console.log("La velocidad de la luz es de "+velocidadLuz);
console.log(slogan);
console.log("El impuesto es de "+impuesto);
console.log("El radio de una estrella es "+radioEstrella);
console.log("Las diferentes tarifas son "+eficiencia);
console.log(validacion(true));
console.log(validacion(false));
console.log("La gravedad en la tierra es de "+gravedad);