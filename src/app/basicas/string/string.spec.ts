import { mensaje } from "./string";


describe('Pruebas de strings' , () => {

    
    it('Debe regresar un string', () =>{
        
        let nombre= 'Diego';
        const resp = mensaje(nombre);
        expect( typeof resp ).toBe('string');

    })

    it('Debe retornar un saludo con el nombre enviado', () =>{

        let nombre= 'Diego';
        const resp = mensaje(nombre);
        expect( resp ).toContain( nombre );

    })


})