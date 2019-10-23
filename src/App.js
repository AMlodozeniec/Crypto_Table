import React from 'react';
import './App.scss';
import Nav from './Components/Nav';
import TableHeader from './Components/Table/TableHeader';

function App() {
  return (
    <div>
      <Nav />
      <div className="App">
        <TableHeader />
      </div>
    </div>
  );
}

export default App;
