import React from 'react';
import styledComponents from 'styled-components';
import Header from './app/components/Header';
import Home from './app/components/Home';
import Detail from './app/components/Detail';
import Detail1 from './app/components/Detail1'
import Detail2 from './app/components/Detail2';
import Detail3 from './app/components/Detail3';
import Detail4 from './app/components/Detail4';
import Detail5 from './app/components/Detail5';
import Detail6 from './app/components/Detail6';
import Detail7 from './app/components/Detail7';
import { Counter } from './features/counter/Counter';
import './App.css';
import Login from './app/components/Login';
import Data from './app/components/Data';
import Footer from './app/components/Footer';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  HashRouter,
  BrowserRouter
} from "react-router-dom";


function App() {

  const [moviesData, SetMoviesData ]=React.useState(Data)


  return (
    

   
    <Container>
      
      <Router   >
      
        <Header />
        <Routes>
          <Route path="./#/login" element={<Login/>} />
          
            <Route path="./#/detail" element={<Detail img={moviesData} />} />
            <Route path="./#/detail1" element={<Detail1 img={moviesData} />} />
            <Route path="./#/detail2" element={<Detail2 img={moviesData} />} />
            <Route path="./#/detail3" element={<Detail3 img={moviesData} />} />
            <Route path="./#/detail4" element={<Detail4 img={moviesData} />} />
            <Route path="./#/detail5" element={<Detail5 img={moviesData} />} />
            <Route path="./#/detail6" element={<Detail6 img={moviesData} />} />
            <Route path="./#/detail7" element={<Detail7 img={moviesData} />} />
            <Route path="./#/login" element={<Login img={moviesData} />} />
            <Route path= "./#/" element={<Home img={moviesData}/>} />
        </Routes>
        <Footer/>
     
        </Router>
      

     
    </Container>
   
  );
}

export default App;
const Container = styledComponents.div`
overflow-x:hidden;


`