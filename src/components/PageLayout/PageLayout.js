'use strict';

import React, { Component } from 'react';

import { Container } from 'semantic-ui-react';

import { PageHeader, CookieConsentMessage, PageFooter } from '../';

export default class PageLayout extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="PageLayout">
				<PageHeader />
				<Container fluid>{this.props.children}</Container>
				<PageFooter />
				<CookieConsentMessage />
			</div>
		);
	}
}
