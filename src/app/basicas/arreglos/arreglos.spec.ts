import { obtenerRobots } from './arreglos';


describe('Pruebas de arreglos', () => {

    it('Debe regresar 3 robots almenos', () => {

        const resp = obtenerRobots();
        expect(resp.length).toBeGreaterThanOrEqual(3);  // mayor o igual a 3

    })

    it('Debe existir Megaman y Ultron',() => {

        const resp = obtenerRobots();
        expect(resp).toContain('Megaman');
        expect(resp).toContain('Ultron');
    })

})