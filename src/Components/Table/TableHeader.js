import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/Table/TableHeader.scss';

export default class TableHeader extends Component {
	state = {
		headers: [ 'Rank', 'Name', 'Price', 'Market Cap', 'Volume (24h)', 'Change (24h)' ]
	};

	static propTypes = {
		handleSort: PropTypes.func
	};

	render() {
		const renderedHeaders = this.state.headers.map((header) => {
			return (
				<div key={header} onClick={() => this.props.handleSort(header)}>
					{header}
				</div>
			);
		});
		return <div className="table-header-wrap">{renderedHeaders}</div>;
	}
}
