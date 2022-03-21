import styled from 'styled-components';
import {useContext} from "react";

import { listsContext } from '../App';

export default function List() {

    const value = useContext(listsContext)

  return (
      <div>
        <h1>STUDENTS LIST </h1>
        {
            value.students.map(student => {
                
                return  <Name className='names'>{student}</Name> 
    
            })
        }
        {/* </Reveal> */}
    </div>
  )
}


const Name = styled.div`
    border: 1px solid grey;
    height: 1em;
    margin-bottom: 1%;
    text-align: center;
    padding: 5%;
    color: black;
    font-weight: bold;
    font-size: 1.3em;
    border-radius: 5px;
`