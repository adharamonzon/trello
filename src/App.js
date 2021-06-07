import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
/* estilos */
import './App.scss';
/* componentes */
import Header from './components/header/Header';
import Home from './components/main/Home';
import Project from './components/Projects/Project';

function App() {
  let [title, setTitle] = useState({ title: '' });
  let [id, setId] = useState({ id: '' });
  let [description, setDescription] = useState({ description: '' });

  const handleNewProject = (props) => {
    setTitle(props.title);
    setId(props.id);
    setDescription(props.description);
  };

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Home handleNewProject={handleNewProject} title={title} id={id} description={description} />
          </Route>
          <Route path='/proyect/:id'>
            <Project />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
