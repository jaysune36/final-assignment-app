import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { fitnessApi } from './FitnessApi';

function ExerciseCard({exercise}) {

  const {id} = useParams()

  return (
    <div>
       <Card className='mb-3' border="light" style={{ width: '18rem' }}>
        <Card.Header>{exercise.name}</Card.Header>
        <Card.Body>
          <Button>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ExerciseCard