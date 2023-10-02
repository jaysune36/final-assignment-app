import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function User(props) {

  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.email}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <Button className="hover-op left-mar" variant='danger' onClick={()=>{props.deleteUser(props.id)}}>Delete</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default User;