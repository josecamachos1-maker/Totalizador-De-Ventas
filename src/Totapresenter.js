import { Totalizador } from "./Tota.js";

const Producto = document.querySelector("#Producto-numero");
const Cantidad = document.querySelector("#Cantidad-numero");
const PrecioNeto = document.querySelector("#PrecioNeto-div");
const Estado = document.querySelector("#Estado-codigo");
const Impuesto = document.querySelector("#Impuesto-div");
const Descuento = document.querySelector("#Descuento-div");
const PrecioTotal = document.querySelector("#PrecioTotal-div");
const Error = document.querySelector("#Error");
const Cancelar = document.querySelector("#Cancelar-button");
const Confirmar = document.querySelector("#Confirmar-button");
const MensajeConfirmacion = document.querySelector("#Mensaje-confirmacion");
const Categoria = document.querySelector("#Categoria-producto");
const DescuentoCategoria = document.querySelector("#DescuentoCategoria-div");
const ImpuestoCategoria = document.querySelector("#ImpuestoCategoria-div");

let totalizador = new Totalizador();

function mostrarResultados() {

  const precio = Number.parseFloat(Producto.value);
  const cantidad = Number.parseInt(Cantidad.value);
  const codigo = Estado.value;
  const categoria = Categoria.value;

  Error.textContent = "";

  if(precio <= 0 && cantidad <= 0)
  {
    Error.textContent = "El precio y cantidad debe ser mayor a 0.";

    PrecioNeto.value = "";
    Descuento.value = "";
    Impuesto.value = "";
    PrecioTotal.value = "";

    return;
  }

  if (precio <= 0) {
    Error.textContent = "El precio debe ser mayor a 0.";

    PrecioNeto.value = "";
    Descuento.value = "";
    Impuesto.value = "";
    PrecioTotal.value = "";

    return;
  }

  if (cantidad <= 0) {
    Error.textContent = "La cantidad debe ser mayor a 0.";

    PrecioNeto.value = "";
    Descuento.value = "";
    Impuesto.value = "";
    PrecioTotal.value = "";

    return;
  }

  if (!isNaN(precio) && !isNaN(cantidad)) {

    const neto = totalizador.PrecioNeto(precio, cantidad);

    PrecioNeto.value = neto.toFixed(2);

    const descuentoCategoriaCalculado =
    totalizador.DescuentoCategoria(categoria, neto);

    DescuentoCategoria.value =
      descuentoCategoriaCalculado.toFixed(2);

    const descuentoCalculado = totalizador.Descuento(neto);
    Descuento.value = descuentoCalculado.toFixed(2);
    const precioConDescuento = neto - descuentoCalculado - descuentoCategoriaCalculado;

    const impuestoCalculado = totalizador.Impuesto(
      codigo,
      precioConDescuento
    );
    Impuesto.value = impuestoCalculado.toFixed(2);

    const impuestoCategoriaCalculado =
      totalizador.ImpuestoCategoria(categoria, precioConDescuento);

    ImpuestoCategoria.value =
      impuestoCategoriaCalculado.toFixed(2);

    const total =
      neto
      - descuentoCalculado
      - descuentoCategoriaCalculado
      + impuestoCalculado
      + impuestoCategoriaCalculado;

    PrecioTotal.value = total.toFixed(2);

    

  }

}
function cancelarCompra() 
{

  Producto.value = "";
  Cantidad.value = "";

  Estado.value = "CA";

  PrecioNeto.value = "";
  Descuento.value = "";
  Impuesto.value = "";
  PrecioTotal.value = "";

  MensajeConfirmacion.textContent = "";
  Confirmar.disabled = false;
}

function confirmarCompra()
{
  const precio = Number.parseFloat(Producto.value);
  const cantidad = Number(Cantidad.value);

  if(precio > 0 && cantidad > 0)
  {
    MensajeConfirmacion.textContent =
      "Compra confirmada. Total: $" + PrecioTotal.value;

    Confirmar.disabled = true;
  }
  else
  {
    MensajeConfirmacion.textContent =
      "No se puede confirmar la compra.";
  }
}

Producto.addEventListener("input", mostrarResultados);
Cantidad.addEventListener("input", mostrarResultados);
Estado.addEventListener("change", mostrarResultados);
Cancelar.addEventListener("click", cancelarCompra);
Confirmar.addEventListener("click", confirmarCompra);
Categoria.addEventListener("change", mostrarResultados);