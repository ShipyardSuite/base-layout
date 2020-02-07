"use strict";

import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import importedStyles from "./Button.css";

export default class Button extends Component {
    static propTypes = {
        title: PropTypes.string,
        color: PropTypes.string,
        textColor: PropTypes.string,
        basic: PropTypes.bool,
        rounded: PropTypes.bool
    };

    static defaultProps = {
        color: "lightgray",
        textColor: "white",
        basic: false,
        rounded: true
    };

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
        const { title, color, textColor, basic, rounded } = this.props;
        const styles = {
            borderRadius: rounded ? 5 : 0,
            border: basic ? "1px solid rgba(34,36,38,.15)" : "0",
            background: basic && "transparent"
        };

        return (
            <button
                className={`
                ${importedStyles.Button} ${!basic &&
                    `background_color_${color}`} 
                    ${basic ? `color_${color}` : `color_${textColor}`}
                     ${basic && `border_color_${color}`}
                `}
                style={styles}
                onClick={this.handleClick}
            >
                {this.props.children || title}
            </button>
        );
    }
}
