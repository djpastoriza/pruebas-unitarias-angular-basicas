import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';


describe('Pruebas del formulario register', () => {

    let componente: FormularioRegister;

    beforeEach( () => {
        componente = new FormularioRegister(new FormBuilder()); // debemos enviarle la estancia del formbuilder que estaba instanciado en el componente
    });

    it('debe instanciarse con dos campos email y password', () => {


        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();

    });


    it('El password debe de ser obligatorio', () => {

        const control = componente.form.get('password');
        control.setValue('');
        expect( control.valid).toBeFalsy();

    });

    it('El email debe de ser obligatorio', () => {

        const control = componente.form.get('email');
        control.setValue('');
        expect( control.valid).toBeFalsy();

    });

    
    it('El email debe de ser un email valido', () => {

        const control = componente.form.get('email');
        control.setValue('dpastoriza9@gmail.com');
        expect( control.valid).toBeTruthy();

    })

})