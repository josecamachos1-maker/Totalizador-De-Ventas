import {Totalizador} from "./Tota.js";


describe("PrecioNeto", () => {
  it("Deberia multiplicar cantidad por producto", () => {
    let totalizador = new Totalizador()
    expect(totalizador.PrecioNeto(5,3)).toEqual(15);
  });
});

describe("Impuesto", () => {
  it("Deberia calcular el impuesto para UT", () => {
    let totalizador = new Totalizador();

    expect(totalizador.Impuesto("UT", 100)).toEqual(6.65);
  });
});

it("Deberia calcular el impuesto para NV", () => {
  let totalizador = new Totalizador();

  expect(totalizador.Impuesto("NV", 100)).toEqual(8);
});

it("Deberia calcular el impuesto para TX", () => {
  let totalizador = new Totalizador();

  expect(totalizador.Impuesto("TX", 60)).toEqual(3.75);
});

it("Deberia calcular el impuesto para AL", () => {
  let totalizador = new Totalizador();

  expect(totalizador.Impuesto("AL", 100)).toEqual(4);
});

it("Deberia calcular el impuesto para CA", () => {
  let totalizador = new Totalizador();

  expect(totalizador.Impuesto("CA", 100)).toEqual(8.25);
});

describe("Descuento", () => {
  it("Deberia aplicar 3% de descuento cuando el precio neto es 1000", () => {
    let totalizador = new Totalizador();

    expect(totalizador.Descuento(1000)).toEqual(30);
  });
});

it("Deberia aplicar 5% de descuento cuando el precio neto es 3000", () => {
  let totalizador = new Totalizador();

  expect(totalizador.Descuento(3000)).toEqual(150);
});

it("Deberia aplicar 7% de descuento cuando el precio neto es 7000", () => {
  let totalizador = new Totalizador();

  expect(totalizador.Descuento(7000)).toEqual(490);
});

it("Deberia aplicar 10% de descuento cuando el precio neto es 10000", () => {
  let totalizador = new Totalizador();

  expect(totalizador.Descuento(10000)).toEqual(1000);
});

it("Deberia aplicar 15% de descuento cuando el precio neto es 30000", () => {
  let totalizador = new Totalizador();

  expect(totalizador.Descuento(30000)).toEqual(4500);
});

it("No deberia aplicar descuento si el precio neto es menor a 1000", () => {
  let totalizador = new Totalizador();

  expect(totalizador.Descuento(500)).toEqual(0);
});

describe("PrecioTotal", () => {
  it("Deberia calcular el precio total con descuento e impuesto", () => {
    let totalizador = new Totalizador();

    expect(totalizador.PrecioTotal(1000, 30, 60.63)).toEqual(1030.63);
  });
});

describe("ValidarDatos", () => {

  it("Deberia detectar un precio invalido", () => {
    let totalizador = new Totalizador();

    expect(totalizador.ValidarDatos(NaN, 2)).toEqual(false);
  });

});

it("Deberia detectar una cantidad invalida", () => {
  let totalizador = new Totalizador();

  expect(totalizador.ValidarDatos(20, NaN)).toEqual(false);
});

it("Deberia aceptar precio y cantidad validos", () => {
  let totalizador = new Totalizador();

  expect(totalizador.ValidarDatos(20, 3)).toEqual(true);
});

describe("ConfirmarCompra", () => {

  it("Deberia permitir confirmar una compra con datos validos", () => {
    let totalizador = new Totalizador();

    expect(totalizador.PuedeConfirmar(20, 3)).toEqual(true);
  });

});

it("No deberia permitir confirmar una compra con datos invalidos", () => {
  let totalizador = new Totalizador();

  expect(totalizador.PuedeConfirmar(-20, 3)).toEqual(false);
});

it("No deberia permitir confirmar una compra con cantidad invalida", () => {
  let totalizador = new Totalizador();

  expect(totalizador.PuedeConfirmar(20, 0)).toEqual(false);
});

describe("DescuentoCategoria", () => {

  it("Deberia aplicar 2% de descuento adicional a Alimentos", () => {
    let totalizador = new Totalizador();

    expect(totalizador.DescuentoCategoria("Alimentos", 1000)).toEqual(20);
  });

});

it("Deberia aplicar 1.5% de descuento adicional a Material de escritorio", () => {
  let totalizador = new Totalizador();

  expect(
    totalizador.DescuentoCategoria("Material de escritorio", 1000)
  ).toEqual(15);
});

it("Deberia aplicar 1% de descuento adicional a Electronicos", () => {
  let totalizador = new Totalizador();

  expect(
    totalizador.DescuentoCategoria("Electronicos", 1000)
  ).toEqual(10);
});

it("Deberia retornar 0 de descuento adicional para Varios", () => {
  let totalizador = new Totalizador();

  expect(
    totalizador.DescuentoCategoria("Varios", 1000)
  ).toEqual(0);
});

describe("ImpuestoCategoria", () => {

  it("Deberia aplicar 7% de impuesto adicional a Bebidas alcoholicas", () => {
    let totalizador = new Totalizador();

    expect(
      totalizador.ImpuestoCategoria("Bebidas alcoholicas", 1000)
    ).toEqual(70);
  });

});


describe("ImpuestoCategoria", () => {

  it("Deberia aplicar 3% de impuesto adicional a Muebles", () => {
    let totalizador = new Totalizador();

  expect(
    totalizador.ImpuestoCategoria("Muebles", 1000)
  ).toEqual(30);
  });

});

describe("ImpuestoCategoria", () => {

  it("Deberia aplicar 4% de impuesto adicional a Electronicos", () => {
    let totalizador = new Totalizador();

    expect(
      totalizador.ImpuestoCategoria("Electronicos", 1000)
    ).toEqual(40);
  });

});

describe("ImpuestoCategoria", () => {

  it("Deberia aplicar 2% de impuesto adicional a Vestimenta", () => {
    let totalizador = new Totalizador();

    expect(
      totalizador.ImpuestoCategoria("Vestimenta", 1000)
    ).toEqual(20);
  });

});


describe("CostoEnvio", () => {

  it("Deberia retornar 0 si el peso esta entre 0 y 10", () => {
    let totalizador = new Totalizador();

    expect(totalizador.CostoEnvio(10)).toEqual(0);
  });
  it("Deberia tener costo de envio 3.5 para peso entre 11 y 20", () => {
  let totalizador = new Totalizador();

  expect(totalizador.CostoEnvio(20)).toEqual(3.5);
});

it("Deberia tener costo de envio 5 para peso entre 21 y 40", () => {
  let totalizador = new Totalizador();

  expect(totalizador.CostoEnvio(40)).toEqual(5);
});

it("Deberia tener costo de envio 6 para peso entre 41 y 80", () => {
  let totalizador = new Totalizador();

  expect(totalizador.CostoEnvio(80)).toEqual(6);
});
it("Deberia tener costo de envio 6.5 para peso entre 81 y 100", () => {
  let totalizador = new Totalizador();

  expect(totalizador.CostoEnvio(81)).toEqual(6.5);
});


});
