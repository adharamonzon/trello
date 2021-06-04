
import ProjectList from '../Projects/ProjectList.jsx';



const Home = () => {

  const handleNewProject = (ev) => {
   console.log(ev.target.value);
  }
  const addNewProject = (ev) => {
   /*  console.log(ev, 'me han clickado'); */
  }
  return(
    <main className='main'>
    <form action="post"  className="form">
         <div className="form--header">
           <h3>Crea un tablero nuevo</h3>
            <input className="form--header__title" required name='title' onChange={handleNewProject} type="text" placeholder=" Nombre del proyecto *" />
         </div>
         <div className="form--body">
          <input className="form--body__id" required name='id' type='text' placeholder=" Añade un id único para tu proyecto *" onChange={handleNewProject} />
          <textarea className="form--body__description" name='description' onChange={handleNewProject} type="text" placeholder=" Introduce una breve descripción de tu proyecto" />
         </div>
         <div className="form--footer">
          <button type="button" className="form--footer__button"  onClick={addNewProject} >Crear tablero</button>
        </div> 
    </form>
    <section className='yourProjects'>
    <h3 className='yourProjects--title'>Tus proyectos</h3>
      <div>{/* 
        <ProjectList /> */}
        </div>
  </section>
</main>
    )} 
      
export default Home;