para utilizar las pruebas:

ng test

para la cobertura de tus pruebas: 

ng test --code-coverage

estructura:

describe('descripcion',()=> {
	to('descripcion de la prueba', ()=> {
		expect()
	})
})

ciclos de vida:

beforeAll(()=>{ }) // antes de que se ejecuten todos los it
beforeEach(()=>{ }) // antes de que se ejecute cada uno de los it
afterAll(()=>{ }) // despues de que se ejecutaron todos los it
afterEach(()=> { }) // despues de que se ejecuta cada uno de los it


comparativas del expect:

toBe()  // significa que el resultado debe ser lo que se le indique.
toContain() // que contenga algun resultado que se le indique.
toBeTruthy() // debe de retornar un true
toBeFalsy() // debe de retornar un false
toBeGreaterThanOrEqual() // mayor o igual
toBeGreaterThan() // mayor
toBeLowerThan() // menor
toBeLowerThanOrEqual() // menor o igual
toHaveBeenCalled() // saber si fue llamado una funcion



// espias

// sirve para simular que llega informacion
 spyOn( servicio, 'getMedicos' ).and.callFake( ()=> {
         return from([ medicos ]); // simulo informacion enviada por el servicio de la url
 });



