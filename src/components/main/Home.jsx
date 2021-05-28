import  { useState } from 'react';
import ProjectList from '../Projects/ProjectList.jsx';

const projects = []

const Home = () => {
  const [data, setData] = useState({
    title: '',
    description: '',
    id: '',
  })
  debugger;

  const handleNewProject = (ev) => {
    setData({
      ...data,
      [ev.target.name]: (ev.currentTarget.value)
    })
  }
  const addNewProject = () => {
    projects.push(data);
  }
  return(
    <main className='main'>
    <section className='main--yourProjects'>
      <h3 className='main--yourProjects__title'>Tus proyectos</h3>
      <div>
        <ProjectList projectList={projects}/>
        <button className='main--createBtn btn btn-light' data-target="#exampleModal" data-toggle='modal'>Crear un tablero nuevo</button>
    </div>
    {/* VENTANA MODAL */}
   <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
         <div className="modal-header">
            <input className="modal-header__title" name='title' onChange={handleNewProject} type="text" placeholder=" Introduce el nombre de tu proyecto" />
            <button type="button" className="close modal-header__close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
         </div>
         <div className="modal-body">
          <textarea className="modal-body__description" name='description' onChange={handleNewProject} type="text" placeholder=" Introduce una breve descripción de tu proyecto" />
         </div>
         <div className="modal-footer">
          <button type="button" className="btn modal-footer__button" onClick={addNewProject} data-dismiss="modal" >Crear tarjeta</button>
        </div>
       </div>
      </div>
   </div>
  </section>
</main>
    )} 
      
export default Home;