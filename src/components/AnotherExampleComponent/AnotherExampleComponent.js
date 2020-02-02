import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './AnotherExampleComponent.css';

export default class AnotherExampleComponent extends Component {
	static propTypes = {
		text: PropTypes.string
	};

	render() {
		const { text } = this.props;

		return <div className={styles.AnotherExampleComponent}>test</div>;
	}
}
