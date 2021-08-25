import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import DummyPage from './pages/DummyPage';

import Home from './pages/Home';
import Login from './pages/Login';
import Waiter from './pages/Waiter';

function App() {

  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/dummy" exact component={DummyPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/waiter" exact component={Waiter} />
      </div>
    </Router>
  )
}
export default App;
