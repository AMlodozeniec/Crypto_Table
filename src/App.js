import React from 'react';
import './assets/styles/App.scss';
import Nav from './Components/Nav';
import Table from './Components/Table/Table';
import { CoinContextProvider } from './contexts/CoinContext';

function App() {
  return (
    <div>
      <Nav />
      <div className="App">
        <CoinContextProvider>
          <Table />
        </CoinContextProvider>
      </div>
    </div>
  );
}

export default App;
