import React from 'react'
import Card from 'react-bootstrap/Card'

function Activity({userLogin}) {

  let calories = 0;
  let duration = 0;
  let heartRate = 0;
  let bpmAvg = 0;
  
    for(let i=0; i<userLogin.exercises.length ;i++) {
      for(let j=0; j<userLogin.exercises[i].details.length; j++) {
        if(userLogin.exercises[i].details[j].calories) {
          calories += parseFloat(userLogin.exercises[i].details[j].calories);
        } else if(userLogin.exercises[i].details[j].duration) {
          duration += parseFloat(userLogin.exercises[i].details[j].duration);
        } else if(userLogin.exercises[i].details[j].heartRate) {
          heartRate += parseFloat(userLogin.exercises[i].details[j].heartRate);
          bpmAvg++;
        }
      }
    }


  return (
    <div className='d-md-flex flex-rows justify-content-around mb-3 activity-board'>
      <div className='mb-3'>
        <Card.Text className='text-center fst-italic fw-bolder mb-0'>Calories: </Card.Text>
        <Card.Text className='text-center'>{calories} Burned</Card.Text>
      </div>
      <div className='mb-3'>
        <Card.Text className='text-center fst-italic fw-bolder mb-0'>Duration: </Card.Text>
        <Card.Text className='text-center'>{duration} mins</Card.Text>
      </div>
      <div>
        <Card.Text className='text-center fst-italic fw-bolder mb-0'>Heart Rate: </Card.Text>
        <Card.Text className='text-center'>{Math.round(heartRate / bpmAvg)} bpm Average</Card.Text>
      </div>
  </div>
  )
}

export default Activity