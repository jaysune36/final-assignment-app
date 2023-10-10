import React, {useEffect, useState} from "react";
import { fitnessApi } from "./FitnessApi";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SignUp() {
  const [newUserName, setNewUserName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const addNewUser = async (e) => {
    e.preventDefault();
    await fitnessApi.post({name: newUserName, email: newEmail, exercises: []});
    setNewUserName('');
    setNewEmail('');
  }


  return(
    <div>
      <div className="sign-up container d-flex flex-column justify-content-center align-items-center">
      <h1 className="font-color">FitnessOne</h1>
        <Form className="border rounded p-5 sign-up-card" onSubmit={addNewUser}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" onChange={
          (e)=>setNewUserName(e.target.value)}
          value={newUserName}
           />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="email@example.com" onChange={
          (e)=>setNewEmail(e.target.value)
        } 
        value={newEmail}/>
        <Form.Text className="font-color">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>
        
    </div>
);
}