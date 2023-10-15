import React, {useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import {fitnessApi} from './FitnessApi';
import ExerciseCard from './ExerciseCard';
import { useParams } from 'react-router-dom';

function ExerciseList({userLogin, setUserLogin}) {

  const [newExerciseName, setNewExerciseName] = useState('');
  const [ calories, setCalories] = useState(0);
  const [ duration, setDuration ] = useState(0);
  const [ heartRate, setHeartRate ] = useState(0);
  const [ userloaded, setUserLoaded ] = useState(false);
  const { id } = useParams();
  let listItems = [];

  // useEffect will be run once the page is loaded. It creates an async fuction and runs the methods needed for an API call. Then with the useParams methods adds the id to only grab that users information.
  useEffect(() => {
    const fetchUserData = async () => {
      const resp = await fetch(`https://6514e010dc3282a6a3cd95f8.mockapi.io/fitnessOne/${id}`);
      const data = await resp.json();
      setUserLogin(data);
    }

    fetchUserData(id)
    // this setTimeout call was used to wait for the load of the user before changing. The reason is that once it was called after the fetchUserData a error was caused for a 'map' bug. This will prevent that bug so the users exercise list items can be displayed
      .then(setTimeout(() => {
        setUserLoaded(true)
      }, 500))
      .catch(console.error);
  }, [id, setUserLogin]);

// addItem will use the input name from the user and add it to the newExerciseName state. Then a put call is used from the fitnessAPI function and that newExerciseName state is added to that user exerciseList items.
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

  // deleteItem will remove a selected item from the userList items, but this will use the put method and actually update the users exercise list items through a filter mehtod and display the new array of items
  const deleteItem = async(item) => {
    const updateItems = {
      ...userLogin, 
      exercises: userLogin.exercises.filter((x) => userLogin.exercises.indexOf(x) !== item) 
    };
    await fitnessApi.put(id, updateItems)
    const data = await fitnessApi.getUser(id);
    setUserLogin(data);
  }

  // similar to the addItem fuction, the addExerciseInfo will use the inputs given from that specific exercise item and add them to the calories, duration, and heartrate states. Then usings another put call to add all that information to that specific exercise which will be used in a later function
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

// if the userloaded then the exercise list items will be mapped over and be rendered to the user.
if (userloaded) {
  listItems = [];

  
  userLogin.exercises.map((exercise, index) => {
    return (
      listItems.push (
      <ExerciseCard 
        key={index}
        index={index}
        addExerciseInfo={addExerciseInfo}
        exercise={exercise}
        deleteItem={deleteItem}
        setCalories={setCalories}
        setHeartRate={setHeartRate}
        setDuration={setDuration}
        calories={calories}
        duration={duration}
        heartRate={heartRate}/>
    )
    
    )
  })
}

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
  
export default ExerciseList;
