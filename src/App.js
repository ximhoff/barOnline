import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

let menu = {
  petiscos: {
    Fritas: {
      nome: 'Fritas',
      ingredientes: 'Batatas, fritas em banha de porco',
      valor: '20,00'
    }
  }
};

function App() {

  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </div>
    </Router>
  );
}
export { menu };
export default App;
