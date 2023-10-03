import React from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ExerciseCard from './ExerciseCard';

function SelectUser({userLogin}) {
  const {id} = useParams();
 

  return (
    <div className='container mt-5'>
      <Card className='selectUser' bg='dark' text='light'>
        <Card.Header className='fs-2 text-center'>{userLogin.name}</Card.Header>
        <Card.Body>
          <Card.Text>{userLogin.email}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SelectUser