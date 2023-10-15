import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ActivityInfo from './ActivityInfo';

// ExerciseCard components takes the passes props and deconstructes them to display each execrises from the userLogin state and renders it to the user.
function ExerciseCard({exercise, deleteItem, index, addExerciseInfo, setCalories, setHeartRate, setDuration, calories, duration, heartRate}) {

  return (
    <div key={index}>
       <Card className='mb-3 card-info-single' border="light">
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