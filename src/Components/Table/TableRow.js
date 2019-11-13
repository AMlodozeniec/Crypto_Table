import React, { useState } from 'react';
import numbro from 'numbro';
import MainModal from '../Modal/MainModal';
import { logo404src } from '../../utils/imgUtils';
import '../../assets/styles/Table/TableRow.scss';

const TableRow = props => {
  const [show, setModal] = useState(false);

  return (
    <div className="table-row-container" onClick={() => setModal(!show)}>
      <div>
        <p>{props.coin.rank}</p>
      </div>

      <div className="table-row-name-col">
        <img
          src={props.coin.logoUrl}
          alt={props.coin.name}
          onError={logo404src}
        />

        <div>
          <p>{props.coin.name}</p>
          <p className="table-row-name-col--symbol">{props.coin.symbol}</p>
        </div>
      </div>

      <div>
        <p>{props.coin.priceUsd >= 1 ?
          numbro(props.coin.priceUsd).formatCurrency({ mantissa: 2 })
          : numbro(props.coin.priceUsd).formatCurrency({ mantissa: 3 })}</p>
      </div>
      <div>
        <p>
          {numbro(props.coin.marketCap).formatCurrency({
            mantissa: 2,
            average: true
          })}
        </p>
      </div>

      <div>
        <p>
          {numbro(props.coin.volumeUsd24Hr).formatCurrency({
            mantissa: 2,
            average: true
          })}
        </p>
      </div>

      <div>
        <p>{props.coin.changePercent24Hr}%</p>
      </div>

      <MainModal
        show={show}
        id={props.coin.id}
        rank={props.coin.rank}
        symbol={props.coin.symbol}
        name={props.coin.name}
        marketCap={props.coin.marketCap}
        priceUsd={props.coin.priceUsd}
        volumeUsd24Hr={props.coin.volumeUsd24Hr}
        changePercent24Hr={props.coin.changePercent24Hr}
      />
    </div>
  );
};
export default TableRow;
