let mensaje = parseInt(prompt("Bienvenidos a $ExtraCash\n 1. Ingresar a su cuenta\n 2. Registrarse"));

const userAdmin = "admin";
const passAdmin = "admin";

let userNew;
let passNew;

switch (mensaje) {
    case 1:
        let user = prompt("Ingrese su usuario: ")
        let pass = prompt("Ingrese su contraseña: ")
        if(user == userAdmin && pass == passAdmin){
            let monto = parseFloat(prompt("Ingrese el Monto a retitrar"));
            let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas\n 3 Coutas\n 6 Cuotas\n 12 Cuotas"));
            let interes = parseFloat(prompt("Ingrese el Porcentaje de intereses"));
            let total = (monto * ((interes + 100)/100)) / cuotas;
            let montoInteres = monto * ((interes + 100)/100);
            for (let i = 1; i <= cuotas; i++){
                console.log(`cuota ${i}, monto a abonar ${total}`);
            }
            console.log(`monto con intereses ${montoInteres}`);
            console.log(`monto total a Abonar es de ${monto}`);
        }
        else if(user == userNew && pass == passNew){
            let monto = parseFloat(prompt("Ingrese el Monto a retitrar"));
            let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas\n 3 Coutas\n 6 Cuotas\n 12 Cuotas"));
            let interes = parseFloat(prompt("Ingrese el Porcentaje de intereses"));
            let total = (monto * ((interes + 100)/100)) / cuotas;
            let montoInteres = monto * ((interes + 100)/100);
            for (let i = 1; i <= cuotas; i++){
                console.log(`cuota ${i}, monto a abonar ${total}`);
            }
            console.log(`monto con intereses ${montoInteres}`);
            console.log(`monto total a Abonar es de ${monto}`);
        }
        break;

    case 2:
        userNew = parseInt(prompt("Ingrese un Nombre de usuario en minusculas"));
        passNew = parseInt(prompt("Ingrese una Contraseña de 4 digitos"));
        if (userNew != NaN && passNew != NaN){
            console.log("se creo un nuevo usuario");
        }
        break;
}