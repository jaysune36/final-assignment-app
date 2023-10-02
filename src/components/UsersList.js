import React, {useEffect, useState} from "react";
import { fitnessApi } from "./FitnessApi";
import User from "./User";

function UsersList() {
  const [users, setUsers] = useState([]);
  let usersListArr = [];

  useEffect(() => {
    fitnessApi.get()
      .then(data => setUsers(data))
  }, [])

  const fetchFitnessUsers = async () => {
    const users = await fitnessApi.get();
    setUsers(users)
  }

  const deleteUser = async (id) => {
    await fitnessApi.delete(id);
    fetchFitnessUsers();
  }

  if(users) {
    users.map((user) => {
      usersListArr.push(<User key={user.id} id={user.id} name={user.name} email={user.email} deleteUser={deleteUser}/>)
    }
    )
  }
  
  return (
    <div className="container mt-5">
      <div className="d-md-flex flex-wrap align-items-center justify-content-center row-gap-5 column-gap-3">
      {usersListArr}
      </div>
    </div>
  )
}

export default UsersList;