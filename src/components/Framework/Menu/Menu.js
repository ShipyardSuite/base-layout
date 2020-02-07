"use strict";

import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import importedStyles from "./Menu.css";

export default class Menu extends Component {
    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);

        this.state = {};
    }

    handleClick = e => {
        const { disabled } = this.props;

        if (disabled) {
            e.preventDefault();
            return;
        }

        _.invoke(this.props, "onClick", e, this.props);
    };

    render() {
        const {} = this.props;
        const styles = {};

        return <p>Menu Placeholder...</p>;
    }
}
