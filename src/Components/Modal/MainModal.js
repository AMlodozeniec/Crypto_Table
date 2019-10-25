import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../assets/styles/Modal/MainModal.scss'

export default class MainModal extends Component {

	static propTypes = {
		name: PropTypes.string.isRequired
	}

	render() {
		const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
		return (
			<div className={showHideClassName} onClick={this.props.handleClose}>
				<section className="modal-main">
					{this.props.name}
				</section>
			</div>
		)
	}
}
