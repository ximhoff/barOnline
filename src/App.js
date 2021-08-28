import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import DummyPage from './pages/DummyPage';

import Home from './pages/Home';
import Login from './pages/Login';
import Waiter from './pages/Waiter';
import Bill from './pages/Bill';
import Drinks from './pages/Drinks';

function App() {

  return (
    <Router>
      <>
        <Route path="/" exact component={Home} />
        <Route path="/dummy" exact component={DummyPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/waiter" exact component={Waiter} />
        <Route path="/bill" exact component={Bill} />
        <Route path="/drinks" exact component={Drinks} />
      </>
    </Router>
  )
}
export default App;
