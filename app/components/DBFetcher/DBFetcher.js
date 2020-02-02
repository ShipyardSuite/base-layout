import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	route: PropTypes.string.isRequired
};

const defaultProps = {
	styles: {
		DBFetcher: {
			padding: '3px 5px',
			borderRadius: '5px',
			color: 'white'
		},
		success: {
			background: '#3aa57b'
		},
		error: {
			background: '#dd2515'
		}
	}
};

class DBFetcher extends Component {
	constructor(props) {
		super(props);

		this.state = {
			status: false
		};
	}

	componentDidMount() {
		const { route } = this.props;

		fetch(route).then((res) => res.json()).then((json) => {
			this.setState({
				status: json.success
			});
		});
	}

	buildStatusOutput() {
		const { status } = this.state;

		return (
			<span className={`DBFetcher`} style={styles.DBFetcher}>
				<span className={status ? 'success' : 'error'} style={status ? styles.success : styles.error}>
					{status ? 'successful' : 'failed'}
				</span>
			</span>
		);
	}

	render() {
		const styles = this.props.styles || {};

		return (
			<div className="DBFetcher" style={styles.DBFetcher}>
				Database connection {this.buildStatusOutput()}
			</div>
		);
	}
}

DBFetcher.propTypes = propTypes;
DBFetcher.defaultProps = defaultProps;

export default DBFetcher;
