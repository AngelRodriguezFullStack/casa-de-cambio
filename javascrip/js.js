let montoConvertido;

const total = document.querySelector("#total");

function convertir() {
    let valore = parseInt(document.getElementById("monto").value);
    
    // Verificar si el valor ingresado es un número válido
    if (isNaN(valore) || valore <= 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Debes ingresar un monto válido",
        });
        return; // Salir de la función si el monto no es válido
    }

    let resultado = 0;
    let dolar = 1025;
    let euro = 925.20;
    if (document.getElementById("dolar").checked) {
        resultado = valore / dolar;
        montoConvertido = resultado.toFixed(2);
        total.textContent = `$${montoConvertido}`;
        const cotizador = document.querySelector("#cotizador");

        cotizador.addEventListener("click", () => {
            Swal.fire({
                title: "Su cambio es: ",
                text: montoConvertido,
                icon: "success"
            });
        });
    } else if (document.getElementById("euro").checked) {
        resultado = valore / euro;
        montoConvertido = resultado.toFixed(2);
        total.textContent = `$${montoConvertido}`;
        Swal.fire({
            title: "Su cambio es: ",
            text: montoConvertido,
            icon: "success"
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Debes seleccionar una moneda",
        });
    }
}

let closeButton = document.getElementsByClassName("close")[0];

closeButton.onclick = function () {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function Lista(producto, color, precio) {
    this.producto = producto;
    this.color = color;
    this.precio = precio;
}

const Lista1 = new Lista("carpa", "verde bordo", 70000);
const Lista2 = new Lista("bajo mesado", "blanco perfesent", 250000);
const Lista3 = [
    "mesa", "comedor", "televisor", "microondas", "cocina", "fernet con coca"
];

for (angel = 0; angel < 2; angel++) {
    console.log(Lista3);
}
for (js = 0; js < 3; js++) {
    console.log(Lista3[5]);
}
for (viper = 0; viper < 6; viper++) {
    console.log(Lista3[viper]);
}

console.log(Lista1);
console.log(Lista2);

localStorage.setItem("arroz", 900)
localStorage.setItem("nombre", "angel")
localStorage.setItem("lista1", "listado")

const autos = {
    nombre: "Dodge Chargue",
    fecha: 1970,
    precio: 3000

}

localStorage.setItem("autos", JSON.stringify(autos))

function addDarkmodeWidget() {
    new Darkmode().showWidget();
}
window.addEventListener('load', addDarkmodeWidget);

const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();