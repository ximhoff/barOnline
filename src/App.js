import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import DummyPage from './pages/DummyPage';

import Home from './pages/Home';
import Login from './pages/Login';
import Waiter from './pages/Waiter';
import ClientMenu from './pages/ClientMenu';
import WaiterMenu from './pages/WaiterMenu';

function App() {

  return (
    <Router>
      <>
        <Route path="/" exact component={Home} />
        <Route path="/dummy" exact component={DummyPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/waiter" exact component={Waiter} />
        <Route path="/clientmenu" exact component={ClientMenu}/>
        <Route path="/waitermenu" exact component={WaiterMenu}/>
      </>
    </Router>
  )
}
export default App;
