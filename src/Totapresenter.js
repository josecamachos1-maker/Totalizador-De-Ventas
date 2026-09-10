import { Totalizador } from "./Tota.js";

const Producto = document.querySelector("#Producto-numero");
const Cantidad = document.querySelector("#Cantidad-numero");
const PrecioNeto = document.querySelector("#PrecioNeto-div");
const Estado = document.querySelector("#Estado-codigo");
const Impuesto = document.querySelector("#Impuesto-div");
const Descuento = document.querySelector("#Descuento-div");

let totalizador = new Totalizador();

function mostrarResultados() {

  const precio = Number.parseFloat(Producto.value);
  const cantidad = Number.parseInt(Cantidad.value);
  const codigo = Estado.value;

  if (!isNaN(precio) && !isNaN(cantidad)) {

    const neto = totalizador.PrecioNeto(precio, cantidad);

    PrecioNeto.value = neto.toFixed(2);

    const descuentoCalculado = totalizador.Descuento(neto);
    Descuento.value = descuentoCalculado.toFixed(2);
    const precioConDescuento = neto - descuentoCalculado;

    const impuestoCalculado = totalizador.Impuesto(
      codigo,
      precioConDescuento
    );
    Impuesto.value = impuestoCalculado.toFixed(2);

    

  }

}

Producto.addEventListener("input", mostrarResultados);
Cantidad.addEventListener("input", mostrarResultados);
Estado.addEventListener("change", mostrarResultados);