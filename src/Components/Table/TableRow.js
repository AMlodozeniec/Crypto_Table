import React, { Component } from 'react';
import Modal from 'react-modal';
import numbro from 'numbro';
import '../../assets/styles/Table/TableRow.scss'

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	}
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
export default class TableRow extends Component {
	state = {
		modalIsOpen: false
	};

	openModal() {
		this.setState({ modalIsOpen: true });
	}

	closeModal(e) {
		e.stopPropagation()
		this.setState({ modalIsOpen: false });
	}

	openModal = this.openModal.bind(this);
	closeModal = this.closeModal.bind(this);


	render() {
		const logoUrl = `https://static.coincap.io/assets/icons/${this.props.coin.symbol.toLowerCase()}@2x.png`
		return (
			<div className="table-row-container" onClick={this.openModal}>
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

				<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					style={customStyles}
				>
					<button onClick={this.closeModal}>close</button>
					<div>I am a modal</div>
				</Modal>
			</div>
		)
	}
}
