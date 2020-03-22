'use strict';

import React, { Component } from 'react';

import { Button, Message, Responsive, Segment } from 'semantic-ui-react';

import { setInStorage, getFromStorage } from './../../utils/storage';

import './CookieConsentMessage.css';

export default class CookieConsentMessage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: true
		};
	}

	componentDidMount() {
		const cookie = getFromStorage('cookie-consent');

		if (cookie) {
			const { dismissed } = cookie;

			if (dismissed == true) {
				this.setState({ visible: false });
			}
		}
	}

	handleDismiss() {
		this.setState({ visible: false });

		setInStorage('cookie-consent', { dismissed: true, date: Date.now() });
	}

	render() {
		const { visible } = this.state;

		return (
			<div>
				<Message only="computer" hidden={visible ? false : true} className="CookieConsentMessage">
					<Responsive minWidth={950}>
						We use cookies to ensure you the best experience. By using our website you agree to our Cookie
						Policy.
						<Button floated="right" basic onClick={this.handleDismiss.bind(this)} color="black">
							Ok. understood
						</Button>
						<Button floated="right" basic color="blue">
							View policy
						</Button>
					</Responsive>
					<Responsive maxWidth={950}>
						We use cookies to ensure you the best experience. By using our website you agree to our Cookie
						Policy.
						<Button.Group fluid basic>
							<Button>View policy</Button>
							<Button onClick={this.handleDismiss.bind(this)}>Ok. understood</Button>
						</Button.Group>
					</Responsive>
				</Message>
			</div>
		);
	}
}
