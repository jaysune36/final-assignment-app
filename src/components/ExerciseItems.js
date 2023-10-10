import React from 'react'
import Card from 'react-bootstrap/Card'

function ExerciseItems() {
  return (
    <div>
      <div className='tip mt-4 mb-5 font-color border-bottom'>
      <h4>Exercie Tips:</h4>
      <p>Add anyone one of the exercises to your daily routine. See the benefits of each exercise to help expand your already current knowledge.</p>
      </div>
      <div className='mb-4 exercise-items'>
<Card>
        <Card.Header className='road'>Walking</Card.Header>
        <Card.Body>
          <Card.Text>Benefits: Increased cardiovascular and pulmonary (heart and lung) fitness</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header className='road'>Power Walking</Card.Header>
        <Card.Body>
          <Card.Text>Benefits: Increase cardiovascular and pulmonary fitness</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header className='road'>Jogging</Card.Header>
        <Card.Body>
          <Card.Text>Benefits: Helps Build Strong Bones and strengthen muscles</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header className='road-fast'>Running</Card.Header>
        <Card.Body>
          <Card.Text>Benefits: Can lower blood pressure and resting heart rate, improve blood sugar control, lower triglycerides, as well as lower cholesterol</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header className='hiking'>Hiking</Card.Header>
        <Card.Body>
          <Card.Text>Benefits: Buildis stronger muscles and bones. Improves your sense of balance and heart health.</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header className='treadmill'>Treadmill</Card.Header>
        <Card.Body>
          <Card.Text>Benefits: Can help you relax, lose weight and reduce signs of depression</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header className='swimming'>Swimming</Card.Header>
        <Card.Body>
          <Card.Text>Benefits: Increased Lung strengthen and help boost heart health.</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header className='circuit'>Circuit Training</Card.Header>
        <Card.Body>
          <Card.Text>Benefits: Improved muscular endurance, increase strengthen and muscle growth.</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header className='e-bike'>Exercise Bike</Card.Header>
        <Card.Body>
          <Card.Text>Benefits: Boost cardio fitness, help weight loss, and strengthen legs and lower body muscles.</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header className='cycle'>Cycling</Card.Header>
        <Card.Body>
          <Card.Text>Benefits: Decrease stress levels and improve joint mobility. Decreased body fat levels.</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header className='ellip'>Elliptical Trainer</Card.Header>
        <Card.Body>
          <Card.Text>Benefits: Boost stamina and burn calories. Lower stress on joints and improve balance.</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header className='weights'>Weight Lifting</Card.Header>
        <Card.Body>
          <Card.Text>Benefits: Manage and Lose weight. Increase metabolism to burn more calories</Card.Text>
        </Card.Body>
      </Card>
      </div>
      
    </div>
  )
}

export default ExerciseItems