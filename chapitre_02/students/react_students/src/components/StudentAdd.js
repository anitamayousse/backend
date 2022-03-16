import styled from 'styled-components';

import { useState, useContext} from "react";
import { listsContext } from '../App';
import axios from 'axios';

function StudentsAdd() {

      //states
      const [name, setName] = useState('');

      const value = useContext(listsContext)

    const getStudentName  = event => {
       setName(event.target.value);
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        //Post new student name to the server
        axios.post('http://localhost:8000/students', {
            Name : [name],
        })
        console.log("added name: ", name);

        //Updating the student state :
        await axios.get('http://localhost:8000/students')
        .then(res => {
          const data = res.data;
          console.log(data);
    
          value.setStudents(data);
          console.log("students state: ", value.students);
        })

        //Resetting the input's field:
        document.querySelector('.student-input').value = "";
  
        console.log("updated");
    }

  return (
    <DivWrapper>

        <form action="" method="post" onSubmit={handleSubmit}>
            <h1>ADD A STUDENT :</h1>
            <label htmlFor="studentName">STUDENT NAME </label>
            <input type="text" name="name" id="name" className='css-input student-input' onChange={getStudentName }/>
            <input type="button" value="ADD" onClick={handleSubmit} onSubmit={handleSubmit}/>

        </form>
    
    </DivWrapper>
  )
}
export default StudentsAdd;
//----------------------- STYLED COMPONENTS -----------------------

const DivWrapper = styled.div`
    form {
        background-color: white;
        padding: 3%;
        width: 105%;
        background-color: rgba(46, 123, 138, 0.8); 
        border-radius: 8px;
        margin-top: 15%;
    }
    h1 {
        text-align: center;
        font-size: 2.5em;
        color: white;
        width: 100%;
        border-radius: 5px;
    }
    /* LABEL */
    label {
        text-align: center;
        color: orange;
        font-weight: bold;
        font-size: 1.8em;
        display: block;
        margin: 15% 0 8% 0;
        width: 100%;
    }
    /* INPUT TEXT */
    .css-input {
     padding: 8px;
     font-size: 17px;
     border: 1px solid #CCCCCC;
     opacity: 0.9;
     color: #000000;
     border-style: solid;
     width: 90%;
     height: 1.5em;
     border-radius: 4px;
     box-shadow: 0px 0px 5px rgba(66,66,66,.75);
     text-shadow: -50px 0px 0px rgba(66,66,66,.0);
}
    .css-input:focus {
        outline:none;
    }
    /* SUBMIT BUTTON */
    input[type=button] {
        background-color: white;
        width: 60%;
        color: black;
        font-weight: bold;
        font-size: 1.3em;
        border-radius: 7px;
        margin: 6% 20%;
        padding: 3%;
        /* border: 1px solid orange; */
        
    }

   
`
