import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* estilos */
import './App.scss';
/* componentes */
import Header from './components/header/Header';
import Home from './components/main/Home';
import Project from './components/Projects/Project';

function App() {
  const renderProjectDetail = (props) => {
    console.log(props);
  };

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/proyect/:id'>
            <Project render={renderProjectDetail()} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
