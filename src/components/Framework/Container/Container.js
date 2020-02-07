"use strict";

import React, { Component } from "react";
import PropTypes from "prop-types";

import importedStyles from "./Container.css";

export default class Container extends Component {
    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const {} = this.props;
        const styles = {};

        return (
            <div className={importedStyles.Container}>
                {this.props.children}
            </div>
        );
    }
}
