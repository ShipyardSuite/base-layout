"use strict";

import React, { Component } from "react";
import PropTypes from "prop-types";

import importedStyles from "./BlockQuote.css";

/**
 * PROPS:
 * -
 */

export default class BlockQuote extends Component {
    static propTypes = {
        quote: PropTypes.string.isRequired,
        color: PropTypes.string,
        author: PropTypes.string
    };

    static defaultProps = {
        color: "blue"
    };

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { color } = this.props;
        return (
            <blockquote
                className={`${importedStyles.BlockQuote} border_color_${color}`}
            >
                {this.props.quote}
                {this.props.author && <cite>- {this.props.author}</cite>}
            </blockquote>
        );
    }
}
