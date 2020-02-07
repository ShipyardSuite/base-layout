import React, { Component } from "react";
import PropTypes from "prop-types";

import importedStyles from "./Panel.css";

/**
 * PROPS:
 * - round
 * - color
 */

export default class Panel extends Component {
    static propTypes = {
        rounded: PropTypes.bool,
        color: PropTypes.string,
        basic: PropTypes.bool,
        textAlign: PropTypes.string,
        padded: PropTypes.bool
    };

    static defaultProps = {
        rounded: false,
        color: "none",
        basic: false,
        textAlign: "left", // left, right, center
        padded: true
    };

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { rounded, color, basic, textAlign, padded } = this.props;

        const styles = {
            borderRadius: rounded ? 8 : 0,
            border: basic ? "0" : "1px solid rgba(34,36,38,.15)",
            textAlign: textAlign,
            boxShadow: basic ? "0" : "0px 2px 3px 0px rgba(0,0,0,0.25)"
        };

        return (
            <div
                className={`full-height ${importedStyles.Panel} ${padded &&
                    importedStyles.padded} ${`background_color_${color}`}`}
                style={styles}
            >
                {this.props.children}
            </div>
        );
    }
}
