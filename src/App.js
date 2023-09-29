import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/exercie-sel">Exercie Selection</Link>
          </li>
          <li>
            <Link to="/exercies-user">Exercies - Users</Link>
          </li>
        </ul>
      </nav>
    </Router>

  );
}

export default App;
