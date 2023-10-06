import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ExerciseList from './ExerciseList';
import { useParams } from 'react-router-dom';

function SelectUser({userLogin, fetchFitnessUsers, setUserLogin}) {

  const { id } = useParams()

  useEffect(() => {
    fetch(`https://6514e010dc3282a6a3cd95f8.mockapi.io/fitnessOne/${id}`)
    .then(resp => resp.json())
    .then(data => setUserLogin(data))
  }, [])

  return (
    <div className='container mt-5'>
      <Card className='selectUser' bg='dark' text='light'>
        <Card.Header className='fs-2 text-center'>{userLogin.name}</Card.Header>
        <Card.Body>
          <Card.Text className='text-center'>{userLogin.email}</Card.Text>
                <ExerciseList userLogin={userLogin} fetchFitnessUsers={fetchFitnessUsers} setUserLogin={setUserLogin}/>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SelectUser