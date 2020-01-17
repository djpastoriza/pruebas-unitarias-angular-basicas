import { Jugador } from './clases';


describe('Pruebas de clases',() => {
    
    let jugador = new Jugador();


    beforeAll( () => {

    });

    beforeEach(() => {
         jugador = new Jugador();
    });

    afterAll( () => {

    });

    afterEach( () => {

    });

  
    it('Debe de retornar 80 de hp, si recibe 20 de daño', () => {
        
        const resp = jugador.recibeDanio(20);
        expect(resp).toBe(80);

    });

    it('Debe de retornar 50 de hp, si recibe 50 de daño', () => {
        
        const resp = jugador.recibeDanio(50);
        expect(resp).toBe(50);

    });

    it('si el daño es mayor o igual a 100 , debe retornar 0', () => {
        
        const resp = jugador.recibeDanio(140);
        expect(resp).toBe(0);

    });

})