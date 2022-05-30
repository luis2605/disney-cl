import React from 'react';
import styledComponents from 'styled-components';
import Header from './app/components/Header';
import Home from './app/components/Home';


import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <Container>
    <div className="App">
   <Header />
   <Home/>
    </div>
    </Container>
  );
}

export default App;
const Container = styledComponents.div`
overflow:hidden;

`