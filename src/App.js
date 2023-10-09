import logo from './logo.svg';
import { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router, Routes, Route, Link, useParams} from 'react-router-dom';
import { fitnessApi } from './components/FitnessApi';
import SignUp from './components/Signup';
import './App.css';
import UsersList from './components/UsersList';
import SelectUser from './components/SelectUser';

function App() {

  const [users, setUsers] = useState([]);
  const [userLogin, setUserLogin] = useState({});

  useEffect(() => {
    fitnessApi.get()
      .then(data => setUsers(data))
  }, []);



 const fetchFitnessUsers = async () => {
    const users = await fitnessApi.get();
    setUsers(users)
  }

   const deleteUser = async (id) => {
    await fitnessApi.delete(id);
    fetchFitnessUsers();
  }

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
            <Link to="/users">Community</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
    {/* <Route path="/exercise-sel">
          </Route>

          <Route path="/daily">
          </Route> */}
          <Route path="/users" element={<UsersList users={users} deleteUser={deleteUser} fetchFitnessUsers={fetchFitnessUsers} setUserLogin={setUserLogin}/>}>
          </Route>
            <Route path="/users/:id" element={<SelectUser userLogin={userLogin} setUserLogin={setUserLogin} fetchFitnessUsers={fetchFitnessUsers}/>}/>

          <Route path="/" element={<SignUp />}/>
    </Routes>
    </Router>

  );
}

export default App;
