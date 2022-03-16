import styled from 'styled-components';

import { listsContext } from '../App';
import StudentAdd from '../components/StudentAdd';
import List from '../components/List'
import { useEffect , useContext} from "react";

import axios from 'axios';

function Home () {

      const value = useContext(listsContext)

      async function fetchData(){
        //Initializing the student's list on mount:
        await axios.get('http://localhost:8000/students')
        .then(res => {
          const data = res.data;
          console.log(data);
    
          value.setStudents(data);
          console.log("students state: ", value.students);
        })
    
      }

      useEffect( ()=> {

        fetchData();
        
    
      }, [])

    return (
      <>
      <ul>
      <List/>
      <StudentAdd />
      </ul>
          
          </>
          );
  }
  
  export default Home;

  const H3 = styled.h3`
    text-align:center;
    padding:20px;
  `;
  const H5 = styled.h5`
  text-align:center;
`;
  const P = styled.p`
  text-align:center;
  `;

const Input = styled.input`
border-radius:12px;
border: 1px solid black;
background-color:rgb(255, 255, 255,0.7);
width:80px;
height:40px;
@media (max-width: 1500px) {
  width:200px;
  height:40px;
}
`;
const Button = styled.button`
border-radius:12px;
border-color:black;
border: 1px solid ;
background-color:rgb(255, 255, 255,0.9);
width:80px;
height:40px;
@media (max-width: 2500px) {
  width:80px;
  height:40px;
}
`;

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap:10px;

`;
