import React, { Component } from 'react';
import axios from 'axios';
import TableHeader from './TableHeader';

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
				marketCap: item.marketCapUsd,
				priceUsd: item.priceUsd,
				volumeUsd24Hr: item.volumeUsd24Hr,
				changePercent24Hr: item.changePercent24Hr
			};
			coinArr.push(coin);
		});
		return coinArr;
	}

	render() {
		return (
			<div>
				<TableHeader />
			</div>
		);
	}
}
