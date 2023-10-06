import React, {useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import {fitnessApi} from './FitnessApi';
import ExerciseCard from './ExerciseCard';
import { useParams } from 'react-router-dom';

function ExerciseList({userLogin, setUserLogin, fetchFitnessUsers}) {

  const [newExerciseName, setNewExerciseName] = useState('');
  const { id } = useParams();

  let listItems = [];

  const addItem = async (e) => {
    e.preventDefault()
    await fitnessApi.put(userLogin.id, {
      exercises: [
        ...userLogin.exercises, {
          name: newExerciseName
        }
      ]
    });
    const data = await fitnessApi.getItem(id);
    setUserLogin(data);
    setNewExerciseName('');
  }

  const deleteItem = async(item) => {
    const updateItems = {
      ...userLogin.exercises, 
      exercises: userLogin.exercises.filter((x) => userLogin.exercises.indexOf(x) !== item) 
    };
    await fitnessApi.put(id, updateItems)
    const data = await fitnessApi.getItem(id);
    setUserLogin(data);
  }

    userLogin.exercises.map((exercise, index) => {
      listItems.push (
        <ExerciseCard key={index} index={index}
          exercise={exercise} deleteItem={deleteItem}/>
      )
    })

  return (
    <div>
      <Form className='text-center d-flex justify-content-center align-items-center flex-column'
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
        <Card.Header className=''>Exercise List</Card.Header>
        <Card.Body>
          <div className='d-flex flex-wrap justify-content-between'>
            {listItems}
          </div>
        </Card.Body>
      </Card>
    </div>

  )
}

export default ExerciseList
