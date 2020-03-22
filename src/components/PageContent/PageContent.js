'use strict';

import React, { Component } from 'react';

import { Container, Segment } from 'semantic-ui-react';

import './PageContent.css';

export default class PageContent extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return <div>{this.props.children}</div>;
	}
}
