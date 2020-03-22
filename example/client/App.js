'use strict';

import React, { Component } from 'react';

import DashboardView from './Views/DashboardView';
import PageView from './Views/PageView';
import { Maintenance } from './../../src/';

export default class App extends Component {
	render() {
		const { view } = this.props;

		if (view === 'dashboard') {
			return <DashboardView />;
		} else if (view === 'page') {
			return <PageView />;
		} else if (view === 'maintenance') {
			return <Maintenance />;
		}
	}
}
