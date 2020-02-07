"use strict";

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Line extends Component {
    static propTypes = {
        color: PropTypes.string,
        type: PropTypes.string, // dotted, dashed, solid
        size: PropTypes.number
    };

    static defaultProps = {
        color: "black",
        type: "solid", // solid, dotted, dashed
        size: 1
    };

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { type, color, size } = this.props;

        const styles = {
            border: 0,
            borderTop: `${size}px ${(type === "dotted" && "dotted") ||
                (type === "solid" && "solid") ||
                (type === "dashed" && "dashed")} black`
        };

        return <hr style={styles} className={`border_color_${color}`} />;
    }
}
