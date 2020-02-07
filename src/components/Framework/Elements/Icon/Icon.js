import { IonIcon, addIcons } from "react-svg-ionicons";
import bundle from "react-svg-ionicons/bundles/all";

addIcons(bundle);

import React, { Component } from "react";
import PropTypes from "prop-types";

import importedStyles from "./Icon.css";

/**
 * PROPS:
 *
 */

export default class Icon extends Component {
    static propTypes = {
        size: PropTypes.string,
        circle: PropTypes.bool,
        name: PropTypes.string,
        color: PropTypes.string,
        background: PropTypes.string,
        padded: PropTypes.bool,
        disabled: PropTypes.bool,
        alternative: PropTypes.bool
    };

    static defaultProps = {
        size: "m", // xs, s, m, l, xl, xxl
        circle: false,
        name: "help",
        color: "black",
        background: "transparent",
        padded: false,
        disabled: false,
        alternative: false
    };

    constructor(props) {
        super(props);

        this.state = {};
    }

    handleIconSize(size) {
        let output;
        switch (size) {
            case "xs":
                output = 10;
                break;
            case "s":
                output = 15;
                break;
            default:
            case "m":
                output = 30;
                break;
            case "l":
                output = 40;
                break;
            case "xl":
                output = 50;
                break;
            case "xxl":
                output = 80;
                break;
        }

        return output;
    }

    render() {
        const {
            name,
            circle,
            size,
            color,
            background,
            padded,
            disabled,
            alternative
        } = this.props;

        const iconSize = this.handleIconSize(size);

        return (
            <IonIcon
                className={`Icon background_color_${background} color_${
                    disabled ? "gray" : color
                }`}
                name={name}
                mode={alternative === true ? "ios" : "md"}
                strokeWidth={3}
                size={iconSize}
                style={{
                    borderRadius: circle ? iconSize : 0,
                    padding: padded ? 10 : 0
                }}
            />
        );
    }
}
