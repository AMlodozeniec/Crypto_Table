import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import { CoinContext } from '../../contexts/CoinContext';

import '../../assets/styles/Table/Table.scss';

export default class Table extends Component {
  state = {
    headers: [
      'Rank',
      'Name',
      'Price',
      'Market Cap',
      'Volume (24h)',
      'Change (24h)'
    ],
    sortable: {
      column: null,
      direction: 'desc'
    }
  };

  sortDataBasedOnHeaderTitle(headerTitle, aRow, bRow) {
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

  flipDirection(column, headerTitle, currDirection) {
    if (column === null) return 'desc'; //If first time column is clicked, sort by descending
    return column === headerTitle
      ? currDirection === 'asc'
        ? 'desc'
        : 'asc'
      : 'desc'; //If different column is clicked, reset direction to descending. Otherwise, flip direction
  }

  handleSort = headerTitle => {
    let column = this.state.sortable.column;
    let currentDirection = this.state.sortable.direction;
    currentDirection = this.flipDirection(
      column,
      headerTitle,
      currentDirection
    );
    const sortedData = this.state.coins.sort((a, b) => {
      //sorts in ascending order always
      return this.sortDataBasedOnHeaderTitle(headerTitle, a, b);
    });

    if (currentDirection === 'desc') {
      sortedData.reverse();
    }

    this.setState({
      coins: sortedData,
      sortable: {
        column: headerTitle,
        direction: currentDirection
      }
    });
  };

  render() {
    return (
      <CoinContext.Consumer>
        {context => {
          const { coins } = context;
          const renderedList = coins.map(coin => {
            return <TableRow key={coin.symbol} coin={coin} />;
          });
          return (
            <div>
              <TableHeader
                headers={this.state.headers}
                handleSort={this.handleSort}
              />
              <div>{renderedList}</div>
            </div>
          );
        }}
      </CoinContext.Consumer>
    );
  }
}
