'use strict';

import React, { Component } from 'react';

import { Container, Segment } from 'semantic-ui-react';

import './PageFooter.css';

export default class PageFooter extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<Segment className="PageFooter" inverted vertical style={{ padding: '5em 0em' }}>
				<Container textAlign="center">
					<p id="copyright">botany-bay.com © 2019 - {new Date().getFullYear()}</p>
				</Container>
			</Segment>
		);
	}
}
