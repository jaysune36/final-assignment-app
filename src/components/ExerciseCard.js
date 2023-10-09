import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ActivityInfo from './ActivityInfo';

function ExerciseCard({exercise, deleteItem, index, addExerciseInfo, setDetails, setCalories, setHeartRate, setDuration, calories, duration, heartRate}) {

  return (
    <div>
       <Card className='mb-3' border="light" style={{ width: '18rem'}}>
        <Card.Header className='d-flex flex-rows justify-content-between align-items-center'>
          <Card.Title className='card-info-title'>{exercise.name}</Card.Title>
          <Button variant='danger' className='card-delete' onClick={()=>deleteItem(index)}>Delete</Button>
          </Card.Header>
        <Card.Body>
          <ActivityInfo exercise={exercise} addExerciseInfo={addExerciseInfo} index={index} setCalories={setCalories} setHeartRate={setHeartRate} setDuration={setDuration} calories={calories} duration={duration} heartRate={heartRate}/>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ExerciseCard