import Project from './Project.jsx';

const ProjectList = (props) => {
  console.log(props);
  const createKey = () => {
    const id = Math.floor(Math.random() * 100000);
    return (id); 
  }
  
  if (props.projectList.length > 0 ) {
    debugger;
    const project = props.projectList.map((item)=> {
      console.log('item', item.title);
      return (
        <li className="projectList--item" key={createKey()}>
          <Project project={item}/>
          <h1>{item.title}</h1>
        </li>
      )
    })
    return <ul className="projectList">{project}</ul>
  } else {
    return <p className='projectList-error'>No hay todavía ningún proyecto</p>
  }
}
export default ProjectList;