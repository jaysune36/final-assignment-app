import React, {useEffect, useState} from "react";
import { fitnessApi } from "./FitnessApi";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SignUp() {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState('');

  useEffect(() => {
    fitnessApi.get()
      .then(data => setUsers(data))
  }, [])

  const fetchFitnessUsers = async () => {
    const users = await fitnessApi.get();
    setUsers(users)
  }

  const addNewUser = async (e) => {
    e.preventDefault();
    await fitnessApi.post({name: newUserName, exercises: [], daily: []})
    fetchFitnessUsers();
    setNewUserName('')
  }


  return(
    <div>
      <div className="container">
        <Form className="d-flex flex-column justify-content-center align-self-center border rounded p-5">
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="email@example.com" />
        <Form.Text className="text-muted">
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