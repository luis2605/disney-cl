import React from 'react';
import styledComponents from 'styled-components';
import Header from './app/components/Header';
import Home from './app/components/Home';
import Detail from './app/components/Detail';
import Detail1 from './app/components/Detail1'
import { Counter } from './features/counter/Counter';
import './App.css';
import Login from './app/components/Login';
import Data from './app/components/Data';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {

  const [moviesData, SetMoviesData ]=React.useState(Data)


  return (
    

   
    <Container>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login/>} />
            <Route path="/detail" element={<Detail img={moviesData} />} />
            <Route path="/detail1" element={<Detail1 img={moviesData} />} />
            <Route path= "/"  element={<Home img={moviesData}/>} />
             
        </Routes>
      </Router>

     
    </Container>
   
  );
}

export default App;
const Container = styledComponents.div`
overflow-x:hidden;


`