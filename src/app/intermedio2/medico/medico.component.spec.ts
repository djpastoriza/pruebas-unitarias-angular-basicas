import { TestBed , ComponentFixture, async }  from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('Medico component', () => {

    
    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[ MedicoComponent ],
            providers: [ MedicoService ],
            imports:[ HttpClientModule ]
        })
 

    fixture = TestBed.createComponent( MedicoComponent );
    component = fixture.componentInstance;
    
    });

    it('Debe de crearse el componente', () => {

        expect(component).toBeTruthy();

    });

    it('Debe retornar el nombre del medico', () => {

        const nombre = 'Diego';
        const res = component.saludarMedico(nombre);

        expect(res).toContain(nombre);

    });


});