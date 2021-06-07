
import ProjectList from '../Projects/ProjectList.jsx';

const Home = (props) => {
console.log(props);
let data = {title:'', id:'', description: ''};
let projects = []
projects.title = props.title;
projects.id = props.id;
projects.description = props.description;
console.log(projects);
const handleChangeTitle = ev => {
  data.title = ev.currentTarget.value;
  return data.title
}
const handleChangeId = (ev) => {
  data.id = ev.currentTarget.value;
  return data.id
}
const handleChangeDescription = (ev) => {
  data.description = ev.currentTarget.value;
  return console.log(data.description)
}
  const handleNewProject = () => {
   props.handleNewProject(data);

  }
 
  return(
    <main className='main'>
    <form action="post"  className="form">
         <div className="form--header">
           <h3>Crea un tablero nuevo</h3>
            <input className="form--header__title" required name='title' onChange={handleChangeTitle} type="text" placeholder=" Nombre del proyecto *" />
         </div>
         <div className="form--body">
          <input className="form--body__id" required name='id' type='text' placeholder=" Añade un id único para tu proyecto *" onChange={handleChangeId} />
          <textarea className="form--body__description" name='description' onChange={handleChangeDescription} type="text" placeholder=" Introduce una breve descripción de tu proyecto" />
         </div>
         <div className="form--footer">
          <button type="button" className="form--footer__button"  onClick={handleNewProject} >Crear tablero</button>
        </div> 
    </form>
    <section className='yourProjects'>
    <h3 className='yourProjects--title'>Tus proyectos</h3>
      <div>
        <ProjectList projectList={projects}/>
        </div>
    </section>
    </main>
    )} 
      
export default Home;