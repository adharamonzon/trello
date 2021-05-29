import Project from './Project.jsx';
import { Link } from 'react-router-dom';
const ProjectList = (props) => {
  const createKey = () => {
    let id = 0;
    ++id
    return (id); 
  }
  
  if (props.projectList.length > 0 ) {
    const project = props.projectList.map((item)=> {
      console.log('item', item.title);
      return (
        <Link className="projectList--link">
        <li className="projectList--item" key={createKey()}>
          <Project project={item}/>
        </li>
        </Link>
      )
    })
    return <ul className="projectList">{project}</ul>
  } else {
    return <p className='projectList-error'>No hay todavía ningún proyecto</p>
  }
}
export default ProjectList;