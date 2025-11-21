const { sumar, restar, multiplicar, dividir } = require("../src/operations");

test("Suma correcta", () => {
    expect(sumar(2, 3)).toBe(5);
});

test("Resta correcta", () => {
    expect(restar(5, 3)).toBe(2);
});

test("Multiplicación correcta", () => {
    expect(multiplicar(4, 3)).toBe(12);
});

test("División correcta", () => {
    expect(dividir(10, 2)).toBe(5);
});

test("No permite división por cero", () => {
    expect(() => dividir(10, 0)).toThrow("No se puede dividir por cero");
});
