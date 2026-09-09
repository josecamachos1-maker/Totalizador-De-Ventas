import {Totalizador} from "./Tota.js";

const Producto = document.querySelector("#Producto-numero");
const Cantidad = document.querySelector("#Cantidad-numero");
const PrecioNeto = document.querySelector("#PrecioNeto-div");

let totalizador = new Totalizador()

function mostrarPrecioNeto() {

  const precio = Number.parseFloat(Producto.value);
  const cantidad = Number.parseInt(Cantidad.value);

  if (!isNaN(precio) && !isNaN(cantidad)) {
    PrecioNeto.value = totalizador.PrecioNeto(precio, cantidad);
  }
}

Producto.addEventListener("input", mostrarPrecioNeto);
Cantidad.addEventListener("input", mostrarPrecioNeto);