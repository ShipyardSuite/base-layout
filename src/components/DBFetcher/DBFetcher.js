import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './DBFetcher.css';

export default class DBFetcher extends Component {
	static propTypes = {
		url: PropTypes.string
	};

	constructor(props) {
		super(props);

		this.state = {
			status: false
		};
	}

	componentDidMount() {
		const { url } = this.props;

		fetch(url).then((res) => res.json()).then((json) => {
			this.setState({
				status: json.success
			});
		});
	}

	buildStatusOutput() {
		const { status } = this.state;

		return <span className={status ? styles.success : styles.error}>{status ? 'successful' : 'failed'}</span>;
	}

	render() {
		return (
			<div className="DBFetcher">
				Database connection <span className={styles.label}>{this.buildStatusOutput()}</span>
			</div>
		);
	}
}
