import React, {useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import {fitnessApi} from './FitnessApi';
import ExerciseCard from './ExerciseCard';
import { useParams } from 'react-router-dom';

function ExerciseList({userLogin, setUserLogin, availItems, fetchFitnessUsers}) {

  const [newExerciseName, setNewExerciseName] = useState('');
  const [ calories, setCalories] = useState(0);
  const [ duration, setDuration ] = useState(0);
  const [ heartRate, setHeartRate ] = useState(0);
  const { id } = useParams();
  let listItems = [];

  const addItem = async (e) => {
    e.preventDefault()
    await fitnessApi.put(id, {
      exercises: [
        ...userLogin.exercises, {
          name: newExerciseName,
          details: []
        }
      ]
    });
    const data = await fitnessApi.getUser(id);
    setUserLogin(data);
    setNewExerciseName('');
  }

  const deleteItem = async(item) => {
    const updateItems = {
      ...userLogin, 
      exercises: userLogin.exercises.filter((x) => userLogin.exercises.indexOf(x) !== item) 
    };
    await fitnessApi.put(id, updateItems)
    const data = await fitnessApi.getUser(id);
    setUserLogin(data);
  }

  const addExerciseInfo = async(e, index) => {
    e.preventDefault()
    const newDetails = {
      ...userLogin, 
      details: userLogin.exercises[index].details.push(
        {calories: calories},
        {duration: duration},
        {heartRate: heartRate}
      )
    }
   await fitnessApi.put(id, newDetails)
   const data = await fitnessApi.getUser(id)
   setUserLogin(data);
   setCalories(0);
   setDuration(0);
   setHeartRate(0)
  }

    userLogin.exercises.map((exercise, index) => {
      listItems.push (
        <ExerciseCard key={index} index={index} addExerciseInfo={addExerciseInfo}
          exercise={exercise} deleteItem={deleteItem} setCalories={setCalories} setHeartRate={setHeartRate} setDuration={setDuration} calories={calories} duration={duration} heartRate={heartRate}/>
      )
    })

  return (
    <div>
      <Form className='text-center d-flex justify-content-center align-items-center flex-column top-border'
        onSubmit={addItem}
        >
        <Form.Label>Add New Exercise</Form.Label>
        <Form.Control className='w-50' type='text' placeholder='Exercise Name' 
        onChange={(e) => setNewExerciseName(e.target.value)}
        value={newExerciseName}
        ></Form.Control>
        <Button type='submit' className="hover-op mt-2" variant="success">Add</Button>
      </Form>
      <Card className='mt-5'>
        <Card.Header>Exercise List</Card.Header>
        <Card.Body>
          <div className='d-sm-flex flex-wrap justify-content-between'>
            {listItems}
          </div>
        </Card.Body>
      </Card>
    </div>

  )
}

export default ExerciseList
