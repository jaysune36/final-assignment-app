import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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