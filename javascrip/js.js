let montoConvertido;

const total = document.querySelector("#total");

function convertir() {
    let valore = parseInt(document.getElementById("monto").value);
    let resultado = 0;
    let dolar = 1025;
    let euro = 925.20;
    if (document.getElementById("dolar").checked){
        resultado = valore / dolar;
        montoConvertido = resultado.toFixed(2);
        total.textContent = `$${montoConvertido}`; 
        let modal = document.getElementById("myModal");
        let modalContent = document.getElementById("convertedPrice");
        modalContent.innerHTML = `El cambio de pesos a dólares es: ${montoConvertido}`;
        modal.style.display = "block";
    }
    else if (document.getElementById("euro").checked){
        resultado = valore / euro;
        montoConvertido = resultado.toFixed(2);
        total.textContent = `$${montoConvertido}`;
        let modal = document.getElementById("myModal");
        let modalContent = document.getElementById("convertedPrice");
        modalContent.innerHTML = `El cambio de pesos a euros es: ${montoConvertido}`;
        modal.style.display = "block";
    }
    else{
        let modal = document.getElementById("myModal")
        let modalContent = document.getElementById("convertedPrice");

       
        modalContent.innerHTML = "Tienes que completar todos los requerimientos";
        modal.style.display = "block";
    }
  

}

let closeButton = document.getElementsByClassName("close")[0];

closeButton.onclick = function() {
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

for (angel = 0; angel < 2; angel++ ) {
    console.log(Lista3);
}
for ( js = 0; js < 3; js++ ) {
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

const botonDarkMode = document.querySelector("#Dark");
const body = document.body;
let darkMode = localStorage.getItem("dark-mode")

function activarModoOscuro() {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "activado");
}

function desactivarModoOscuro() {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "desactivado")
}

if (darkMode === "activado") {
    activarModoOscuro();
} else {
    desactivarModoOscuro();
}

botonDarkMode.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");
    
    if (darkMode === "activado") {
        desactivarModoOscuro();
    } else {
        activarModoOscuro()
    }

})


