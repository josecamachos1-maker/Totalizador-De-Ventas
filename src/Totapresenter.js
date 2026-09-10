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
const Peso = document.querySelector("#Peso-numero");
const CostoEnvio = document.querySelector("#CostoEnvio-div");
const CostoEnvioTotal = document.querySelector("#CostoEnvioTotal-div");

let totalizador = new Totalizador();

function mostrarResultados() {

  Confirmar.disabled = false;
  MensajeConfirmacion.textContent = "";

  const peso = Number(Peso.value);
  const precio = Number.parseFloat(Producto.value);
  const cantidad = Number(Cantidad.value);
  const codigo = Estado.value;
  const categoria = Categoria.value;

  Error.textContent = "";

  if (isNaN(precio) || isNaN(cantidad) || Producto.value === "" || Cantidad.value === "") {
    Error.textContent = "Ingrese un precio y una cantidad.";

    PrecioNeto.value = "";
    Descuento.value = "";
    DescuentoCategoria.value = "";
    Impuesto.value = "";
    ImpuestoCategoria.value = "";
    PrecioTotal.value = "";
    CostoEnvio.value = "";
    CostoEnvioTotal.value = "";

    return;
  }

  if(precio <= 0 && cantidad <= 0)
  {
    Error.textContent = "El precio y cantidad debe ser mayor a 0.";

    PrecioNeto.value = "";
    Descuento.value = "";
    Impuesto.value = "";
    PrecioTotal.value = "";
    DescuentoCategoria.value = "";
    ImpuestoCategoria.value = "";
    CostoEnvio.value = "";
    CostoEnvioTotal.value = "";

    return;
  }

  if (precio <= 0) {
    Error.textContent = "El precio debe ser mayor a 0.";

    PrecioNeto.value = "";
    Descuento.value = "";
    Impuesto.value = "";
    PrecioTotal.value = "";
    DescuentoCategoria.value = "";
    ImpuestoCategoria.value = "";
    CostoEnvio.value = "";
    CostoEnvioTotal.value = "";

    return;
  }

  if (cantidad <= 0) {
    Error.textContent = "La cantidad debe ser mayor a 0.";

    PrecioNeto.value = "";
    Descuento.value = "";
    Impuesto.value = "";
    PrecioTotal.value = "";
    DescuentoCategoria.value = "";
    ImpuestoCategoria.value = "";
    CostoEnvio.value = "";
    CostoEnvioTotal.value = "";

    return;
  }
  if (!Number.isInteger(cantidad))
 {
  Error.textContent = "La cantidad debe ser un número entero.";

  PrecioNeto.value = "";
  Descuento.value = "";
  Impuesto.value = "";
  PrecioTotal.value = "";
  DescuentoCategoria.value = "";
  ImpuestoCategoria.value = "";
  CostoEnvio.value = "";
  CostoEnvioTotal.value = "";

  return;
 }
 if(Peso.value === "" || isNaN(peso))
{
    Error.textContent = "Ingrese el peso volumétrico.";

    CostoEnvio.value = "";

    return;
}
if(peso < 0)
{
    Error.textContent = "El peso volumétrico no puede ser negativo.";

    CostoEnvio.value = "";

    return;
}

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



const costoEnvioCalculado = totalizador.CostoEnvio(peso);

CostoEnvio.value = costoEnvioCalculado.toFixed(2);

const costoEnvioTotalCalculado =
  totalizador.CostoEnvioTotal(cantidad, costoEnvioCalculado);

CostoEnvioTotal.value =
  costoEnvioTotalCalculado.toFixed(2);


    const total =
      neto
      - descuentoCalculado
      - descuentoCategoriaCalculado
      + impuestoCalculado
      + impuestoCategoriaCalculado;

    PrecioTotal.value = total.toFixed(2);


}
function cancelarCompra() 
{
  Producto.value = "";
  Cantidad.value = "";

  Estado.value = "CA";
  Categoria.value = "Varios";

  PrecioNeto.value = "";
  Descuento.value = "";
  DescuentoCategoria.value = "";
  Impuesto.value = "";
  ImpuestoCategoria.value = "";
  PrecioTotal.value = "";

  Error.textContent = "";
  MensajeConfirmacion.textContent = "";

  Peso.value = "";
  CostoEnvio.value = "";
  CostoEnvioTotal.value = "";

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
Peso.addEventListener("input", mostrarResultados);