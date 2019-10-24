import React, { Component } from 'react';
import axios from 'axios';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import '../../assets/styles/Table/Table.scss'

export default class Table extends Component {
	state = {
		coins: []
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
		data.forEach((item) => {
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

	render() {
		const renderedList = this.state.coins.map(coin => {
			return (
				<TableRow
					key={coin.symbol}
					coin={coin}
				/>
			);
		});
		// return<div>{ renderedList }</div>;
		return (
			<div>
				<TableHeader />
				{renderedList}
			</div>
		);
	}
}
