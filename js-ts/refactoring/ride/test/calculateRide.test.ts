import { calc } from "../src/calc";

test("Deve calcular o valor da corrida de uma corrida normal", () => {
	const fare = calc([{ dist: 10, ds: new Date("2021-03-01T10:00:00") }]);
	expect(fare).toBe(21);
});

test("Deve calcular o valor da corrida de uma corrida em horário noturno", () => {
	const fare = calc([{ dist: 10, ds: new Date("2021-03-01T23:00:00") }]);
	expect(fare).toBe(39);
});

test("Deve calcular o valor da corrida de uma corrida no domingo", () => {
	const fare = calc([{ dist: 10, ds: new Date("2021-03-07T10:00:00") }]);
	expect(fare).toBe(29);
});

test("Deve calcular o valor da corrida de uma corrida no domingo em horário noturno", () => {
	const fare = calc([{ dist: 10, ds: new Date("2021-03-07T23:00:00") }]);
	expect(fare).toBe(50);
});

test("Deve calcular o valor da corrida com a distância inválida", () => {
	const fare = calc([{ dist: -3, ds: new Date("2021-03-01T10:00:00") }]);
	expect(fare).toBe(-1);
});

test("Deve calcular o valor da corrida com a data inválida", () => {
	const fare = calc([{ dist: 10, ds: new Date("abcdef") }]);
	expect(fare).toBe(-2);
});

test("Deve calcular o valor da corrida com tarifa mínima", () => {
	const fare = calc([{ dist: 3, ds: new Date("2021-03-01T10:00:00") }]);
	expect(fare).toBe(10);
});
