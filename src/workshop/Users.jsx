import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/'+counter)
      .then(function (response) {
        setUsers(response.data);
      }
      )
  }, [counter]);

  console.log(users)
  return (
    <div>
        Demo with API
        <button onClick={()=> setCounter(counter<10?counter+1:1)}>Add</button>
        <h2>{users.name}</h2>
        {/* {users.map(user => <li key={user.id}>{user.name}</li>)} */}
    </div>
  )
}


export default Users