import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TableHeader extends Component {
	static propTypes = {
		prop: PropTypes
	}

	render() {
		return (
			<div>
				<h1>TableHeader</h1>
			</div>
		)
	}
}
