import React, { createContext, useState, useContext } from 'react';
import { CoinContext } from './CoinContext';

export const SortContext = createContext();

export const SortContextProvider = props => {
  let { coins } = useContext(CoinContext);
  let [sortedCoins, setSortCoins] = useState([]);
  let [headers] = useState([
    {
      headers: [
        'Rank',
        'Name',
        'Price',
        'Market Cap',
        'Volume (24h)',
        'Change (24h)'
      ],
    }
  ]);
  let [sortable, setSortable] = useState(null);
  let [direction, setDirection] = useState('desc');

  const handleSort = (headerTitle) => {
    let column = sortable;
    let currentDirection = direction;

    currentDirection = flipDirection(
      column,
      headerTitle,
      currentDirection
    );

    const sortedData = coins.sort((a, b) => {
      //sorts in ascending order always
      return sortDataBasedOnHeaderTitle(headerTitle, a, b);
    });

    if (currentDirection === 'desc') {
      sortedData.reverse();
    }

    setSortCoins(sortedData);
    setSortable(headerTitle);
    setDirection(currentDirection);
  };

  const sortDataBasedOnHeaderTitle = (headerTitle, aRow, bRow) => {
    if (headerTitle === 'Rank') {
      return aRow.rank - bRow.rank;
    } else if (headerTitle === 'Name') {
      const nameA = aRow.name.toUpperCase();
      const nameB = bRow.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    } else if (headerTitle === 'Price') {
      return aRow.priceUsd - bRow.priceUsd;
    } else if (headerTitle === 'Market Cap') {
      return aRow.marketCap - bRow.marketCap;
    } else if (headerTitle === 'Volume (24h)') {
      return aRow.volumeUsd24Hr - bRow.volumeUsd24Hr;
    } else if (headerTitle === 'Change (24h)') {
      return aRow.changePercent24Hr - bRow.changePercent24Hr;
    }
  }

  const flipDirection = (column, headerTitle, currDirection) => {
    if (column === null) return 'desc'; //If first time column is clicked, sort by descending
    return column === headerTitle
      ? (currDirection === 'asc' ? 'desc' : 'asc')
      : 'desc'; //If different column is clicked, reset direction to descending. Otherwise, flip direction
  };


  return (
    <SortContext.Provider value={{ sortedCoins, headers, handleSort }}>
      {props.children}
    </SortContext.Provider>
  );
};
