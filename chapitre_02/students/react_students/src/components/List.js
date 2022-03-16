import styled from 'styled-components';
import {useContext} from "react";

import { listsContext } from '../App';

export default function List() {

    const value = useContext(listsContext)

  return (
      <dv>
        <h1>STUDENTS LIST </h1>
        {
            value.students.map(student => {
                
                return  <Names className='names'>{student}</Names> 
    
            })
        }
        {/* </Reveal> */}
    </dv>
  )
}


const Names = styled.div`
    border: 1px solid grey;
    width: 95%;
    height: 1em;
    margin-bottom: 1%;
    text-align: center;
    padding: 5%;
    /* background-color: aliceblue; */
    background-color: blue; 
    color: black;
    font-weight: bold;
    font-size: 1.3em;
    border-radius: 5px;
`