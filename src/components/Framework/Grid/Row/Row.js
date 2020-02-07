"use strict";

import React, { Component } from "react";
import PropTypes from "prop-types";

import importedStyles from "./Row.css";

/**
 * PROPS:
 * - color: Background color of column
 * - padded: does the column have a padding of 10px?
 * - textAlign: Alignment of text in column (left or right)
 */

export default class Row extends Component {
    static propTypes = {
        color: PropTypes.string,
        padded: PropTypes.bool,
        textAlign: PropTypes.string,
        gutter: PropTypes.bool,
        equal: PropTypes.bool
    };

    static defaultProps = {
        color: "none",
        padded: false,
        textAlign: "left",
        gutter: true,
        equal: false
    };

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { color, padded, textAlign, gutter, equal } = this.props;

        return (
            <div
                className={`Framework Grid ${
                    gutter
                        ? importedStyles.Row_gutter
                        : importedStyles.Row_gutterless
                } background_color_${color} ${padded &&
                    importedStyles.padded} ${equal &&
                    importedStyles.full_height}`}
                style={{ textAlign: textAlign }}
            >
                {this.props.children}
            </div>
        );
    }
}
