import React from 'react';

const Main = () => {
  return (<main className='main'>
    <section className='main--yourProjects'>
      <h3 className='main--yourProjects__title'>Tus proyectos</h3>
      <span className='main--yourProjects__text'>No tienes proyectos aún!</span>
   
      <button className='main--createBtn'>Crear un tablero nuevo</button>
 </section>
    {/* <ul> 
      <ProjectsList/ >
    </ul> */}
    

  </main>)
}

export default Main;