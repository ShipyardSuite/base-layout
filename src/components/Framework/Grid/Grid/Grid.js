"use strict";

import React, { Component } from "react";
import PropTypes from "prop-types";

import importedStyles from "./Grid.css";

/**
 * PROPS:
 * - width: Width of grid in pixel
 * - fluid: Does the Grid have the full width of the browser window?
 * - textAlign: Alignment of text in column (left or right)
 */

export default class Grid extends Component {
    static propTypes = {
        width: PropTypes.number,
        fluid: PropTypes.bool,
        textAlign: PropTypes.string,
        padded: PropTypes.bool
    };

    static defaultProps = {
        width: 720,
        fluid: false,
        padded: false,
        textAlign: "left"
    };

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { width, fluid, padded, textAlign } = this.props;

        const styles = {
            maxWidth: `${fluid ? "100%" : `${width}px`}`,
            margin: `${fluid ? "inherit" : "0 auto"}`,
            textAlign: textAlign
        };
        return (
            <div
                className={`Framework ${importedStyles.Grid} ${padded &&
                    importedStyles.padded}`}
                style={styles}
            >
                {this.props.children}
            </div>
        );
    }
}
