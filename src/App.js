import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import SignUp from './components/Signup';
import './App.css';

function App() {
  return (
    <Router>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/exercie-sel">Exercies</Link>
            <Link to="/daily">Daily Activity</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
    {/* <Route path="/exercise-sel">
          </Route>

          <Route path="/daily">
          </Route> */}
          
          <Route path="/" element={<SignUp />}/>
    </Routes>
    </Router>

  );
}

export default App;
