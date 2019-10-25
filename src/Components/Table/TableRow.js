import React, { Component } from 'react';
import numbro from 'numbro';
import MainModal from '../Modal/MainModal';
import '../../assets/styles/Table/TableRow.scss';

export default class TableRow extends Component {
	state = { show: false };

	showModal = () => {
		this.setState({ show: true });
	};

	hideModal = (e) => {
		e.stopPropagation();
		this.setState({ show: false });
	};

	logo404src = (e) => {
		e.target.src =
			'https://icon-icons.com/icons2/1385/PNG/32/generic-crypto-cryptocurrency-cryptocurrencies-cash-money-bank-payment_95340.png';
	};

	render() {
		const logoUrl = `https://static.coincap.io/assets/icons/${this.props.coin.symbol.toLowerCase()}@2x.png`;
		return (
			<div className="table-row-container" onClick={this.showModal}>
				<div>
					<p>{this.props.coin.rank}</p>
				</div>

				<div className="table-row-name-col">
					<img src={logoUrl} alt={this.props.coin.name} onError={this.logo404src} />

					<div>
						<p>{this.props.coin.name}</p>
						<p className="table-row-name-col--symbol">{this.props.coin.symbol}</p>
					</div>
				</div>

				<div>
					<p>{numbro(this.props.coin.priceUsd).formatCurrency({ mantissa: 2 })}</p>
				</div>
				<div>
					<p>{numbro(this.props.coin.marketCap).formatCurrency({ mantissa: 2, average: true })}</p>
				</div>

				<div>
					<p>{numbro(this.props.coin.volumeUsd24Hr).formatCurrency({ mantissa: 2, average: true })}</p>
				</div>

				<div>
					<p>{this.props.coin.changePercent24Hr}%</p>
				</div>

				<MainModal
					show={this.state.show}
					handleClose={this.hideModal}
					id={this.props.coin.id}
					rank={this.props.coin.rank}
					symbol={this.props.coin.symbol}
					name={this.props.coin.name}
					marketCap={this.props.coin.marketCap}
					priceUsd={this.props.coin.priceUsd}
					volumeUsd24Hr={this.props.coin.volumeUsd24Hr}
					changePercent24Hr={this.props.coin.changePercent24Hr}
				/>
			</div >
		)
	}
}
