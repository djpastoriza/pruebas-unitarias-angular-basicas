import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, empty, throwError } from 'rxjs';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
        const medicos =['medico1','medico2','medico3'];
        
        spyOn( servicio, 'getMedicos' ).and.callFake( ()=> {
            return from([ medicos ]); // simulo informacion enviada por el servicio de la url
        });
    });


    it('Init: debe de cargar los medicos', () => {

        componente.ngOnInit(); // ejecuto el ngoninit de el componente
        let resp = componente.medicos; // luego asigno el valor de la variable medicos que la obtiene de ejecutar funcion getMedicos que es simulada la informacion arriba

        expect(resp.length).toBeGreaterThan(0);  
   
    });

    it('Debe de llamar al servicor para agregar un medico',()=> {

        const espia = spyOn(servicio,'agregarMedico').and.callFake( () => {
            return empty(); // devuelve vacio
        });

        componente.agregarMedico();  // llamo a mi funcion

        expect(espia).toHaveBeenCalled(); // verifica si fue llamado

    })

    it('Debe agregar un nuevo medico al arreglo de medicos', () => {

        const medico = {
            id:1,
            nombre:'juan'
        };

        spyOn(servicio,'agregarMedico').and.returnValue( from([medico]) ); // se agrega un medico

        componente.agregarMedico(); // se llama la funcion

        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0); // verificamos que el medico que agrege fue incluido

    });

    it('Si falla la adicion, la propiedad mensaje de error debe ser igual al error del servicio', () => {
        
        const miError = 'No se pudo agregar el medico';

        spyOn(servicio, 'agregarMedico').and.returnValue( throwError(miError) );

        componente.agregarMedico();

        expect(componente.mensajeError).toBe(miError);
    });

    it('Debe de llamar al servidor para borrar el medico', ()=> {

        spyOn(window , 'confirm').and.returnValue(true);

        const espia = spyOn(servicio, 'borrarMedico').and.callFake( () => {
            return empty();
        })

        componente.borrarMedico('Diego');
        
        expect(espia).toHaveBeenCalledWith('Diego');

    })


});
