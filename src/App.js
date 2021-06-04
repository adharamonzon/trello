import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
/* estilos */
import './App.scss';
/* componentes */
import Header from './components/header/Header';
import Home from './components/main/Home';
import Project from './components/Projects/Project';

const projects = [];

function App() {
  const [data, setData] = useState({
    title: '',
    description: '',
    id: '',
  });

  const handleNewProject = (ev) => {
    setData({
      ...data,
      [ev.target.name]: ev.currentTarget.value,
    });
    console.log(data);
  };

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Home handleNewProject={handleNewProject} />
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
