import React, {useEffect} from "react";
import UserCard from './User'

function UsersList({users, deleteUser, fetchFitnessUsers, setUserLogin}) {
  
  let usersListArr = [];

  useEffect(() => {
    fetchFitnessUsers()
  }, [])

  if(users) {
    users.map((user) => {
      usersListArr.push(<UserCard user={user} key={user.id} deleteUser={deleteUser} setUserLogin={setUserLogin}/>)
    }
    )
  }
  
  return (
    <div className="container mt-5">
      <div className="d-flex flex-wrap align-items-center justify-content-center row-gap-5 column-gap-3">
      {usersListArr}
      </div>
    </div>
  )
}

export default UsersList;