import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ExerciseList from './ExerciseList';

function SelectUser({userLogin, fetchFitnessUsers, setUserLogin}) {

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