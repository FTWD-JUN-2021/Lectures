import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'



function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {

    // axios.get(`http://localhost:5000/snack/snickers`).then(res => console.log(res.data))


    // axios.get(`http://localhost:5000/puppy?breed=pervuian hairless dogs&temper=angry&treat=good`).then(res => console.log(res.data))


    axios.get(`http://localhost:5000/getAllTheUsersFromTheServer`).then(res => {
      console.log(res.data)
      setUsers(res.data)
    })


  }, [])

  const addUser = () => {
    axios.post(`http://localhost:5000/signUp`, { email: 'val', password: 'zooey' }).then(res => console.log(res.data))
  }


  const ShowUsers = () => users.map(user => <li>{user.email}</li>)



  return (
    <div className="App">
      <h1>Connecting Front to Back</h1>
      <ShowUsers />
      {/* {ShowUsers()} */}
      <button onClick={addUser}>Sign up</button>
    </div>
  );
}







export default App;
