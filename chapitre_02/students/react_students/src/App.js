
import {React, createContext, useState} from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
//css
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './views/Home'


export const listsContext = createContext();

function App() {

  const [students, setStudents] = useState([]);

  const value = {
    students: students,
    setStudents : setStudents,
  }
  return (
    <div>
    <listsContext.Provider value={value}>
    <BrowserRouter>

        <Switch>
            <Route exact path='/' component={Home}></Route>
        </Switch>
    
    </BrowserRouter>
    </listsContext.Provider>
    </div>
  );
}

export default App;

const Ul = styled.li`
  padding: 30px;
  list-style: none;
  gap: 12px;
  `;

const Nav = styled.div`
  background-color:white;
  `;

const Footer = styled.div`
  background-color:white;
  height:60px;
  top:160%;
  display:block;
  position:absolute;
  width: 100%;
  `;