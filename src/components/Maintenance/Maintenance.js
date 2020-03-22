'use strict';

import React, { Component } from 'react';

import { Segment, Header, Icon, Button } from 'semantic-ui-react';

import './Maintenance.css';

export default class Maintenance extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<Segment placeholder basic secondary className="Maintenance">
				<Header as="h1" icon>
					<Icon name="wrench" />
					UNDER MAINTENANCE
				</Header>
			</Segment>
		);
	}
}
