import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { fitnessApi } from './FitnessApi';

function ExerciseCard({exercise, setUserLogin, deleteItem, index}) {

  const {id} = useParams()

  // const deleteItem = async() => {
  //   // const updateItems = {
  //   //   ...exercise, 
  //   //   exercises: exercise.exercises.filter((x) => x.id !== id) 
  //   // };

  //   console.log()
  //   // await fitnessApi.put(id, updateItems)
  //   // const data = await fitnessApi.getItem(id);
  //   // setUserLogin(data);
  // }

  return (
    <div>
       <Card className='mb-3' border="light" style={{ width: '18rem' }}>
        <Card.Header>{exercise.name}</Card.Header>
        <Card.Body>
          <Button onClick={()=>deleteItem(index)}>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ExerciseCard