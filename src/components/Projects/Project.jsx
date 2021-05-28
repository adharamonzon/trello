import React from 'react';

const Project = (props) => {
  console.log(props);
  return <div>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
  </div>
}

export default Project;