import React, { Component } from 'react';
import axios from 'axios';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import '../../assets/styles/Table/Table.scss';

export default class Table extends Component {
  state = {
    coins: [],
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

  componentDidMount() {
    this.setData();
  }

  async setData() {
    try {
      let allCoinData = await axios.get('https://api.coincap.io/v2/assets');
      let filteredData = this.filterData(allCoinData.data.data);
      this.setState({
        coins: filteredData
      });
    } catch (err) {
      console.log(err);
    }
  }

  filterData(data) {
    let coinArr = [];
    data.forEach(item => {
      let coin = {
        id: item.id,
        rank: item.rank,
        symbol: item.symbol,
        name: item.name,
        marketCap: parseFloat(item.marketCapUsd),
        priceUsd: parseFloat(item.priceUsd),
        volumeUsd24Hr: parseFloat(item.volumeUsd24Hr),
        changePercent24Hr: parseFloat(item.changePercent24Hr).toFixed(2)
      };
      coinArr.push(coin);
    });
    return coinArr;
  }

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
    const renderedList = this.state.coins.map(coin => {
      return <TableRow key={coin.symbol} coin={coin} />;
    });
    return (
      <div>
        <TableHeader
          headers={this.state.headers}
          handleSort={this.handleSort}
        />
        {renderedList}
      </div>
    );
  }
}
