import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './components/Login/Login'
import Nav from './components/Nav/Nav';
import Items from './components/Items/Items';
import Home from './components/Home/Home';

function App() {
  
  return (
    <Router>
      <div className="App">
            <Nav/>
        <Switch>
          <Route exact path="/"> 
            <Login/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/items">
            <Items/>
          </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
