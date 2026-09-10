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