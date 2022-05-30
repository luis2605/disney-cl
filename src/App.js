import React from 'react';
import styledComponents from 'styled-components';
import Header from './app/components/Header';
import Home from './app/components/Home';
import Detail from './app/components/Detail';
import { Counter } from './features/counter/Counter';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  return (
    

   
    <Container>
      <Router>
        <Header />
        <Routes>
            <Route path="/detail" element={<Detail/>} />
             
            <Route path= "/"  element={<Home/>}/>
             
        </Routes>
      </Router>

     
    </Container>
   
  );
}

export default App;
const Container = styledComponents.div`
overflow-x:hidden;


`