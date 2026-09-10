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

