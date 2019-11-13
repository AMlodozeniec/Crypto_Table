import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CoinContext = createContext();

export const CoinContextProvider = props => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function setCoinData() {
      try {
        let allCoinData = await axios.get('https://api.coincap.io/v2/assets');
        let filteredData = filterData(allCoinData.data.data);
        setCoins(filteredData);
      } catch (err) {
        console.log(err);
      }
    }
    setCoinData();
  }, [coins]);

  const filterData = data => {
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
        changePercent24Hr: parseFloat(item.changePercent24Hr).toFixed(2),
        logoUrl: `https://static.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`
      };
      coinArr.push(coin);
    });
    return coinArr;
  };

  return (
    <CoinContext.Provider value={{ coins }}>
      {props.children}
    </CoinContext.Provider>
  );
};
