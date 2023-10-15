import { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { fitnessApi } from './components/FitnessApi';
import SignUp from './components/Signup';
import './App.css';
import UsersList from './components/UsersList';
import SelectUser from './components/SelectUser';
import ExerciseItems from './components/ExerciseItems';

function App() {
// Users states are created to created the list of users pulled from the API. userLogin state is used to hold the user selected within the community page and display that users information in a sigle page. 
  const [users, setUsers] = useState([]);
  const [userLogin, setUserLogin] = useState({});

  // UseEffect will intitate the API set up and setUsers to the data collected
  useEffect(() => {
    fitnessApi.get()
      .then(data => setUsers(data))
  }, []);


// fetchFitnessUsers is created as an async function to update the users states when a change has been made.
 const fetchFitnessUsers = async () => {
    const users = await fitnessApi.get();
    setUsers(users)
  }

// deleteUser accepts 1 argument the 'id' and will run the class function delete to remove that user from the users list and then fetchFitnessUsers is then updated to get the new list of users from the API.
   const deleteUser = async (id) => {
    await fitnessApi.delete(id);
    fetchFitnessUsers();
  }

  return (
    // Router is used as the BrowserRouter and is needed for the Routes, Link, and Route to be used from the react-router-dom
    <Router>
       <Navbar expand="md" variant="dark" className='border-bottom'>
      <Container>
        <Navbar.Brand>
            {/* Links are used for the SignUp, Exercises, and Community pages and are always displayed at the top since this is outside of the Routes */}
            <Link to="/" className='text-decoration-none'>Home / SignUp</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Link to="/exercise-sel" className='margin-r text-decoration-none'>Exercies</Link>
            <Link to="/users" className='text-decoration-none'>Community</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* Routes is used to display the Route from the Links clicked */}
    <Routes>
    <Route path="/exercise-sel" element={<ExerciseItems />}/>
          <Route path="/users" element={<UsersList users={users} deleteUser={deleteUser} fetchFitnessUsers={fetchFitnessUsers} setUserLogin={setUserLogin}/>}>
          </Route>
            <Route path="/users/:id" element={<SelectUser userLogin={userLogin} setUserLogin={setUserLogin} fetchFitnessUsers={fetchFitnessUsers}/>}/>

          <Route path="/" element={<SignUp />}/>
    </Routes>
    </Router>

  );
}

export default App;
