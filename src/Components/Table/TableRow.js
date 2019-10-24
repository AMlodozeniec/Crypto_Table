import React, { Component } from 'react'
import numbro from 'numbro';
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
						alt={this.props.coin.name} />
					<div>
						<p>{this.props.coin.name}</p>
						<p>{this.props.coin.symbol}</p>
					</div>
				</div>

				<div>
					{numbro(this.props.coin.priceUsd).formatCurrency({ mantissa: 2 })}
				</div>
				<div>
					{numbro(this.props.coin.marketCap).formatCurrency({ mantissa: 2, average: true, })}
				</div>

				<div>
					{numbro(this.props.coin.volumeUsd24Hr).formatCurrency({ mantissa: 2, average: true, })}
				</div>

				<div>
					{this.props.coin.changePercent24Hr}%
				</div>

			</div>
		)
	}
}
