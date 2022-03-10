
import React, {createContext, useState} from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
//css
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
//Pages
import Home from './views/Home'

export const listsContext = createContext({
  store: [],
});

function App() {

  const [store, setStore] = useState([]);

  const value = {
    store: store,
    setStore: setStore,
  }

  return (
    <>
    <listsContext.Provider value={value}>
    <BrowserRouter>
    <Nav>
    <nav className="nav navbar-nav ">
      <Ul className='d-flex'>
          <Link to="/" className='text-link'>Home</Link>
      </Ul>
    </nav>
    </Nav>
    <Switch>
    <Route exact path="/" component={Home} />
    </Switch>
      <Footer >
        <h6 className="text-center text-black">© Made by Anita Mayousse 2022.</h6>
      </Footer>
    </BrowserRouter>
    </listsContext.Provider>
    </>
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