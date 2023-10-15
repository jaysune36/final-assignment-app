import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Users function creates each users own card and with the passed props that are deconstructed displays that users list information. A fucntion is then added for when a user is selected to create a new Link with that users id as a param and create a new page displaying more user information.
function User({user, deleteUser, setUserLogin}) {
  
  const userLogged = () => {
    setUserLogin(prev => user)
  }

  return (
    <div>
       <Card className='selectUser' bg='dark' text='light' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.email}</Card.Text>
        <Link to={`/users/${user.id}`} onClick={userLogged}><Button className="hover-op" variant="success">User Exercies</Button></Link>
        <Button className="hover-op left-mar" variant='danger' onClick={()=>{deleteUser(user.id)}}>Delete</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default User;