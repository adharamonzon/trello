import { Link } from 'react-router-dom';
const ProjectList = (props) => {
  if (props.projectList.length > 0) {
    const project = props.projectList.map((item) => {
      return (
        <Link to={`/project/${item.id}`} className='projectList--link'>
          <li className='projectList--item' key={item.id}>
            <h1 className='projectList--item__title'>{item.title}</h1>
            <p className='projectList--item__description'>{item.description}</p>
          </li>
        </Link>
      );
    });
    return <ul className='projectList'>{project}</ul>;
  } else {
    return <p className='projectList--error'>No hay todavía ningún proyecto</p>;
  }
};
export default ProjectList;
