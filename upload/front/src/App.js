
import './App.css';

import styled from 'styled-components';

import { useEffect , useState} from "react";

import axios from 'axios';


function App() {

  const [image, setImage] = useState('');
  const [users, setUsers] = useState([]);
  const value = {
    users: users,
    setUsers : setUsers,
  }

  const getImage  = event => {
   setImage(event.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Post new student name to the server
    axios.post('http://localhost:8000/user', {
        Name : [image],
    })

    axios.post('http://localhost:8000/user', {
      Name : [image],
  })
    console.log("added name: ", image);

    //Updating the student state :
    await axios.get('http://localhost:8000/user')
    .then(res => {
      const data = res.users;
      console.log(data);

      value.setUsers(data);
      console.log("students state: ", value.users);
    })

    //Resetting the input's field:
    document.querySelector('.userInput').value = "";

    console.log("updated");
}
  async function fetchData(){
    //Initializing the student's list on mount:
    await axios.get('http://localhost:8000/user')
    .then(res => {
      const data = res.users;
      console.log(data);

      value.setUsers(data);
      console.log("students state: ", value.users);
    })

  }

  useEffect( ()=> {

    fetchData();
    

  }, [])

  return (
    <>
        <div>
          <h1>STUDENTS LIST </h1>
          {
              value.users.map(user => {
                  
                  return  <div className='names'>{user}</div> 
      
              })
          }
          {/* </Reveal> */}
      </div>
      <form action="" method="post" onSubmit={handleSubmit}>
            <h1>ADD A STUDENT :</h1>
            <label htmlFor="studentName">STUDENT NAME </label>
            <input type="text" name="name" id="name" className='css-input userInput' onChange={getImage }/>
            <input type="text" name="name" id="name" className='css-input userInput' onChange={getImage }/>
            <input type="button" value="ADD" onClick={handleSubmit} onSubmit={handleSubmit}/>

        </form>
          
    </>
  );
}

export default App;
