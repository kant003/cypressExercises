describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  })

  /*
  Busca la caja de texto por su id=phrase y escribe en ella el texto 'Hello World'
  Busca el botón por su id=btnMayus y presiónalo
  Busca el div con id=mayusResult y comprueba que su texto sea 'HELLO WORLD'
  */
  it('Ejercicio01', () => {

  })

  /*
  Busca el primer input y escribe el texto 'Hola mundo'
  Busca el primer botón y presiónalo
  Busca el hermano del primer boton y comprueba que su texto sea 'HOLA MUNDO'
  */
  it('Ejercicio02', () => {

    
  })

  /*
  Busca el elemento que tenga por atributo name=first_name y escribe en él el texto 'Juan'
  Busca el input que tenga por atributo name=last_name y escribe en él el texto 'Gonzalo'
  Busca el segundo botón y presiónalo
  Busca el div que tenga por id=unificationResult y comprueba que su texto sea 'Juan Gonzalo'
  */
  it('Ejercicio03', () => {

    
  })

  /*
  Busca el elemento input que sea de type=tel y comprueba que el input tenga el valor por defecto '986112233'
  Busca el elemento que tenga por atributo data-test-id=btnAdd y presiónalo
  Busca el div que tenga por id=phoneResult y comprueba que su texto sea '+34 986112233'
  */
  it('Ejercicio04', () => {

    
  })

  /*
  Busca el input hijo del elemento que tenga por id=website. Limpia su contenido. Escribe en él el texto 'http://www.cebem.net'
  Busca el cuarto elemento que tenga la clase=my-button y presiónalo
  Busca el el elemento que tenga por atributo data-test-id=protocolRemove, y comprueba que su div hijo contenga el texto 'www.cebem.net'
  */
  it('Ejercicio05', () => {

    
  })


    /*
  Busca el elemento input que tenga el type=email. Escribe el texto 'angel@cebem.net'
  Busca el 5º botón y presiónalo
  Busca el segundo hermano del input que sea del tipo email y compruba que su texto sea 'cebem.net'
  */
  it('Ejercicio06', () => {

    
  })
})
