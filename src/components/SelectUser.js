import React from 'react';
import Card from 'react-bootstrap/Card';
import ExerciseList from './ExerciseList';
import Activity from './Activity';


// SelectUser component displays the userLogin state from the User that was selected in the UserList page.
function SelectUser({userLogin, fetchFitnessUsers, setUserLogin}) {


  return (
    <div className='container mt-5'>
      <Card className='selectUser' bg='dark' text='light'>
        <Card.Header className='fs-2 text-center'>{userLogin.name}</Card.Header>
        <Card.Body>
          <Card.Text className='text-center bottom-border'>{userLogin.email}</Card.Text>
          <Activity userLogin={userLogin}/>
                <ExerciseList userLogin={userLogin} fetchFitnessUsers={fetchFitnessUsers} setUserLogin={setUserLogin}/>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SelectUser