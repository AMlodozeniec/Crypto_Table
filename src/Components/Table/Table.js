import React, { Component, useContext } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import { CoinContext } from '../../contexts/CoinContext';
import { SortContext } from '../../contexts/SortContext';

import '../../assets/styles/Table/Table.scss';

const Table = props => {
  const { sortedCoins } = useContext(SortContext);
  const { coins } = useContext(CoinContext);

  const coinMap = sortedCoins.length !== 0 ? sortedCoins : coins;

  return (

    <div>
      <TableHeader

      />
      <div>{coinMap.map(coin => {
        return <TableRow key={coin.symbol} coin={coin} />;
      })}
      </div>
    </div>
  );
}
export default Table;