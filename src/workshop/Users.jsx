import axios from "axios";
import { useState } from "react";

const Users = () => {
const [users, setUsers] = useState([]);
   axios.get('https://jsonplaceholder.typicode.com/users')
   .then(function (response){
     console.log(response);
   }
   )
  return (
    <div>Demo with API
    </div>
  )
}


export default Users