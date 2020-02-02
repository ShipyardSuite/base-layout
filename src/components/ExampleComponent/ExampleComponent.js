import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ExampleComponent.css';

export default class ExampleComponent extends Component {
	static propTypes = {
		text: PropTypes.string
	};

	render() {
		const { text } = this.props;

		return (
			<div className={styles.ExampleComponent}>
				Shared Component: <span className={styles.input}>{text}</span>
			</div>
		);
	}
}
