import React, { Component } from 'react'
import '../../assets/styles/Table/TableHeader.scss'

export default class TableHeader extends Component {
	state = {
		headers: [
			"Rank",
			"Name",
			"Price",
			"Market Cap",
			"Volume (24h)",
			"Change (24h)"]
	};

	render() {
		const renderedHeaders = this.state.headers.map(header => {
			return (
				<div key={header}>
					{header}
				</div>
			);
		});
		return (
			<div className="table-header-wrap">
				{renderedHeaders}
			</div>
		)
	}
}