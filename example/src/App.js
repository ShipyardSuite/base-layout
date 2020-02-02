import React, { Component } from 'react';

import { ExampleComponent, AnotherExampleComponent } from 'base-layout';

export default class App extends Component {
	render() {
		return (
			<div>
				<ExampleComponent text="React component" />
				<hr />
				<AnotherExampleComponent />
			</div>
		);
	}
}
