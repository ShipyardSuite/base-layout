'use strict';

import React, { Component } from 'react';

import { Segment, Container, Menu, Icon, Image, Button } from 'semantic-ui-react';

import headerIcon from './shipyard_logo_icon.png';

export default class PageHeader extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<Segment inverted style={{ borderRadius: 0 }}>
					<Container fluid>
						<Menu stackable inverted secondary>
							<Menu.Item>
								<a href="http://localhost:8080/homepage/">
									<Image src={headerIcon} size="mini" />
								</a>
							</Menu.Item>

							{/*
							<Menu.Item name="features">Item 1</Menu.Item>

							<Menu.Item name="testimonials">Item 2</Menu.Item>
							*/}

							<Menu.Menu position="right">
								<Menu.Item name="sign-in">
									<a href="http://localhost:8080/auth/login">
										<Button color="green">Log-in</Button>
									</a>
								</Menu.Item>

								<Menu.Item>
									<a href="https://github.com/ShipyardSuite">
										<Icon name="github" size="large" />
									</a>
								</Menu.Item>
							</Menu.Menu>
						</Menu>
					</Container>
				</Segment>
			</div>
		);
	}
}
