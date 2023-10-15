import React from 'react'
import Form from 'react-bootstrap/Form'
import Accordion from 'react-bootstrap/esm/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {useAccordionButton} from 'react-bootstrap/AccordionButton'

function CustomToggle({children, eventKey}) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <button type="button"
      style={
        {
          backgroundColor: 'white',
          border: 'none'
        }
      }
      onClick={decoratedOnClick}>
      {children} </button>
  );
}

function ActivityInfo({addExerciseInfo, index, setCalories, setHeartRate, setDuration, calories, duration, heartRate}) {

  return (

    <Accordion defaultActiveKey=''>
      <Card className='workout-card'>
        <Card.Header>
          <CustomToggle eventKey="0">Add Workout Detail</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Form className='m-1 workout-details'>
            <Form.Label>Calories</Form.Label>
            <Form.Control type="number" onChange={(e)=>setCalories(e.target.value)} value={calories}></Form.Control>
            <Form.Label>Duration<span className='italic'> (.min)</span></Form.Label>
            <Form.Control type="number" placeholder='(in mins)' onChange={(e)=>setDuration(e.target.value)} value={duration}></Form.Control>
            <Form.Label>Heart Rate<span className='italic'> (bpm)</span></Form.Label>
            <Form.Control type="number" onChange={(e)=>setHeartRate(e.target.value)} value={heartRate}></Form.Control>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-2">
              <Button className="btn btn-success me-md-2" type="submit" onClick={(e)=>addExerciseInfo(e, index)}>Add</Button>
            </div>
          </Form>
        </Accordion.Collapse>
      </Card>
    </Accordion>

  )
}

export default ActivityInfo
