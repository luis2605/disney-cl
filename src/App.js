import React from 'react';
import Header from './app/components/Header';
import Home from './app/components/Home';

import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
   <Header />
   <Home/>
    </div>
  );
}

export default App;
