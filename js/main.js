// Declaración de variables y constantes
const nombreSimulador = "Simulador de Comercio";
let usuarioNombre = "";
let saldoCuenta = 1000; // Saldo inicial
let productos = ["Producto A", "Producto B", "Producto C"]; // Array de productos

console.log(`Bienvenido al ${nombreSimulador}`);

// Función para solicitar el nombre del usuario
function solicitarNombre() {
    usuarioNombre = prompt("¿Cuál es tu nombre?");
    console.log(`Hola, ${usuarioNombre}. ¡Bienvenido!`);
}

// Función para mostrar el saldo de la cuenta
function mostrarSaldo() {
    alert(`Tu saldo actual es: $${saldoCuenta}`);
}

// Función para realizar una compra
function realizarCompra() {
    let productoSeleccionado = prompt(`¿Qué producto deseas comprar?\n1. ${productos[0]}\n2. ${productos[1]}\n3. ${productos[2]}`);
    if (productoSeleccionado >= 1 && productoSeleccionado <= 3) {
        let precio = 100; // Precio fijo para simplificar
        if (saldoCuenta >= precio) {
            saldoCuenta -= precio;
            alert(`Has comprado ${productos[productoSeleccionado - 1]}. Tu nuevo saldo es: $${saldoCuenta}`);
        } else {
            alert("No tienes suficiente saldo para realizar esta compra.");
        }
    } else {
        alert("Selección no válida.");
    }
}

// Ejecución del simulador en la consola
solicitarNombre();
mostrarSaldo();
realizarCompra();
