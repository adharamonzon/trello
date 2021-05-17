import React from 'react';

class Projects{
  constructor(name){
    this.name = name
  }
}

const Main = () => {
  const addNewProject = () => {
    console.log('han creado una nueva tarjeta');
   /*  const name = prompt('añadir título a tu proyecto')
    const project = new Projects(name);
    console.log(project); */
  }
  return (<main className='main'>
    <section className='main--yourProjects'>
      <h3 className='main--yourProjects__title'>Tus proyectos</h3>
      <span className='main--yourProjects__text'>No tienes proyectos aún!</span>
      <button className='main--createBtn btn btn-light' data-target="#exampleModal" data-toggle='modal'>Crear un tablero nuevo</button>
      {/* VENTANA MODAL */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <input className="modal-header__title" type="text" placeholder=" Introduce el nombre de tu proyecto" /> 
              <button type="button" className="close modal-header__close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <textarea className="modal-body__description" type="text" placeholder=" Introduce una breve descripción de tu proyecto" /> 
            </div>
            <div className="modal-footer">
              <button type="button" className="btn modal-footer__button" onClick={addNewProject}>Crear tarjeta</button>
            </div>
           </div>
        </div>
      </div>
 </section>
  
    

  </main>)
}

export default Main;