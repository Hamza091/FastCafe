import './App.css';
import Login from './components/Login/Login'
import Nav from './components/Nav/Nav';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Login/>      
    </div>
  );
}

export default App;
