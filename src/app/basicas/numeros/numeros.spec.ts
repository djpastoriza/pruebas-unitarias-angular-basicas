import { incrementar } from './numeros';


describe('Pruebas de numeros', () => {

    it('Retornar 100 si el numero es mayor a 100', () => {

        const resp = incrementar(300);
        expect(resp).toBe(100);

    })

    it('Retornar el numero que se envia + 1, si es menor a 100', () => {

        const resp = incrementar(50);
        expect(resp).toBe(51);

    })

})