import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/Modal/MainModal.scss';

export default class MainModal extends Component {
	static propTypes = {
		show: PropTypes.bool.isRequired,
		handleClose: PropTypes.func.isRequired,
		coin: PropTypes.shape({
			id: PropTypes.string.isRequired,
			rank: PropTypes.string.isRequired,
			symbol: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			marketCap: PropTypes.number.isRequired,
			priceUsd: PropTypes.number.isRequired,
			volumeUsd24Hr: PropTypes.number.isRequired,
			changePercent24Hr: PropTypes.string.isRequired
		})
	};

	componentWillMount() {
		document.addEventListener('mousedown', this.handleClick, false);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClick, false);
	}

	handleClick = (e) => {
		if (this.clickedOutsideModal(e)) {
			this.props.handleClose();
		}
	};

	clickedOutsideModal = (e) => {
		return this.modalRef.contains(e.target) ? false : true;
	};

	setRef = (ref) => {
		this.modalRef = ref;
	};

	render() {
		const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';
		return (
			<div className={showHideClassName} onClick={this.handleClick}>
				<section className="modal-main" ref={this.setRef}>
					{this.props.coin.name}
				</section>
			</div>
		);
	}
}
