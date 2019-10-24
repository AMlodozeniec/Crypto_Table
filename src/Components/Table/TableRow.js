import React, { Component } from 'react'
import '../../assets/styles/Table/TableRow.scss'

export default class TableRow extends Component {
	render() {
		const logoUrl = `https://static.coincap.io/assets/icons/${this.props.coin.symbol.toLowerCase()}@2x.png`
		return (
			<div className="table-row-container">
				<div>
					1
				</div>

				<div className="table-row-name-col">
					<img
						src={logoUrl}
						width="32"
						height="32"
						alt="" />
					<div>
						<p>{this.props.coin.name}</p>
						<p>{this.props.coin.symbol}</p>
					</div>
				</div>

				<div>
					{this.props.coin.priceUsd}
				</div>
				<div>
					{this.props.coin.marketCap}
				</div>

				<div>
					{this.props.coin.volumeUsd24Hr}
				</div>

				<div>
					{this.props.coin.changePercent24Hr}
				</div>

			</div>
		)
	}
}
