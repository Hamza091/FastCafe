import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './components/Login/Login'
import Nav from './components/Nav/Nav';
import Items from './components/Items/Items';
import Home from './components/Home/Home';
import AdminHome from './components/AdminHome/AdminHome';
import {useSelector} from 'react-redux'
import { RootState } from './redux/store';


function App() {
  
  const loginCredentials = useSelector((state:RootState) => state.LoginReducer)

  return (
    <Router>
      <div className="App">
            
      {loginCredentials?.success?<Nav/>:null}
          {loginCredentials?.success?
            loginCredentials?.admin?
              <Switch>
                <Route exact path="/">
                  
                  <AdminHome/>
                   
                  </Route>
                </Switch>
            :
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/items">
                <Items/>
              </Route>
            </Switch>
              :
            <Route exact path="/"> 
                <Login/>
            </Route>
            
          }
          
          
      </div>
    </Router>
  );
}

export default App;
