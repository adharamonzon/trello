import React from 'react';

const Project = (props) => {
  return <div className="project">
    <h1 className="project__title">{props.project.title}</h1>
    <p className="project__description">{props.project.description}</p>
  </div>
}

export default Project;