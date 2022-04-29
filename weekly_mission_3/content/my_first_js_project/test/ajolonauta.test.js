const Alojonauta = require('./../app/ajolonauta')

describe("pruebas de unidad de alojonauta", () => {
    test('caso de prueba 1: creacion de objeto', () => {
        //aqui tu puedes utilizar el codigo como lo decees utilizar
        const woopa = new Alojonauta("Woopa")

        //validar el resultao esperado
        expect(woopa.name).toBe("Woopa");
    })
})