import React from 'react';
import './assets/styles/App.scss';
import Nav from './Components/Nav';
import Table from './Components/Table/Table';
import { CoinContextProvider } from './contexts/CoinContext';
import { SortContextProvider } from './contexts/SortContext';

function App() {
  return (
    <div>
      <Nav />
      <div className="App">
        <CoinContextProvider>
          <SortContextProvider>
            <Table />
          </SortContextProvider>
        </CoinContextProvider>
      </div>
    </div>

  );
}

export default App;
