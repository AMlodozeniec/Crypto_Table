import React from 'react';
import './App.scss';
import Nav from './Components/Nav';
import Table from './Components/Table/Table';

function App() {
  return (
    <div>
      <Nav />
      <div className="App">
        <Table />
      </div>
    </div>
  );
}

export default App;
