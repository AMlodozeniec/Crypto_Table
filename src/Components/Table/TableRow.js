import React, { Component } from 'react';
import numbro from 'numbro';
import '../../assets/styles/Table/TableRow.scss'

export default class TableRow extends Component {
	state = { show: false };

	showModal = () => {
		this.setState({ show: true });
	};

	hideModal = (e) => {
		e.stopPropagation()
		this.setState({ show: false });
	};

	render() {
		const logoUrl = `https://static.coincap.io/assets/icons/${this.props.coin.symbol.toLowerCase()}@2x.png`
		return (
			<div className="table-row-container" onClick={this.showModal}>
				<div>
					<p>{this.props.coin.rank}</p>
				</div>

				<div className="table-row-name-col">
					<img
						src={logoUrl}
						alt={this.props.coin.name} />

					<div>
						<p>{this.props.coin.name}</p>
						<p className="table-row-name-col--symbol">{this.props.coin.symbol}</p>
					</div>
				</div>

				<div>
					<p>{numbro(this.props.coin.priceUsd).formatCurrency({ mantissa: 2 })}</p>
				</div>
				<div>
					<p>{numbro(this.props.coin.marketCap).formatCurrency({ mantissa: 2, average: true, })}</p>
				</div>

				<div>
					<p>{numbro(this.props.coin.volumeUsd24Hr).formatCurrency({ mantissa: 2, average: true, })}</p>
				</div>

				<div>
					<p>{this.props.coin.changePercent24Hr}%</p>
				</div>

				<Modal show={this.state.show} handleClose={this.hideModal}>
					<p>Modal</p>
					<p>Data</p>
				</Modal>
			</div >
		)
	}
}

const Modal = ({ handleClose, show, children }) => {
	const showHideClassName = show ? "modal display-block" : "modal display-none";

	return (
		<div className={showHideClassName}>
			<section className="modal-main">
				{children}
				<button onClick={handleClose}>close</button>
			</section>
		</div>
	);
};