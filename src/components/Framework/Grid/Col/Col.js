import React, { Component } from "react";
import PropTypes from "prop-types";

import importedStyles from "./Col.css";

/**
 * PROPS:
 * - width: Width of column (1 - 12)
 * - color: Background color of column
 * - padded: does the column have a padding of 10px?
 * - textAlign: alignment of text in column (left or right)
 */

export default class Col extends Component {
    static propTypes = {
        width: PropTypes.number,
        color: PropTypes.string,
        padded: PropTypes.bool,
        textAlign: PropTypes.string,
        fullHeight: PropTypes.bool
    };

    static defaultProps = {
        width: 12,
        color: "none",
        padded: false,
        textAlign: "left",
        fullHeight: false
    };

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { width, color, padded, textAlign, fullHeight } = this.props;

        console.log(importedStyles);
        return (
            <div
                className={`Framework Grid Row ${
                    importedStyles[`Col_${width}`]
                } background_color_${color} ${padded &&
                    importedStyles.padded} ${fullHeight &&
                    importedStyles.full_height}`}
                style={{ textAlign: textAlign }}
            >
                {this.props.children}
            </div>
        );
    }
}
