import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* estilos */
import './App.scss';
/* componentes */
import Header from './components/header/Header';
import Home from './components/main/Home';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
