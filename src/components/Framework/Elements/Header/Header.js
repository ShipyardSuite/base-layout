import React, { Component } from "react";
import PropTypes from "prop-types";

import importedStyles from "./Header.css";

/**
 * PROPS:
 */

export default class Header extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        subTitle: PropTypes.string,
        size: PropTypes.string,
        color: PropTypes.string
    };

    static defaultProps = {
        size: "xl", // xs, s, m, l, xl, xxl
        color: "black"
    };

    constructor(props) {
        super(props);

        this.state = {};
    }

    handleHeaderSize(size, content) {
        let output;
        switch (size) {
            case "xs":
                output = (
                    <h6 className={`${importedStyles.mainHeader}`}>
                        {content}
                    </h6>
                );
                break;
            case "s":
                output = (
                    <h5 className={`${importedStyles.mainHeader}`}>
                        {content}
                    </h5>
                );
                break;
            default:
            case "m":
                output = (
                    <h4 className={`${importedStyles.mainHeader}`}>
                        {content}
                    </h4>
                );
                break;
            case "l":
                output = (
                    <h3 className={`${importedStyles.mainHeader}`}>
                        {content}
                    </h3>
                );
                break;
            case "xl":
                output = (
                    <h2 className={`${importedStyles.mainHeader}`}>
                        {content}
                    </h2>
                );
                break;
            case "xxl":
                output = (
                    <h1 className={`${importedStyles.mainHeader}`}>
                        {content}
                    </h1>
                );
                break;
        }

        return output;
    }

    render() {
        const { title, subTitle, size, color } = this.props;

        const styles = {};

        return (
            <div className={`${importedStyles.Header} color_${color}`}>
                {this.handleHeaderSize(size, title)}
                {subTitle && (
                    <div className={`${importedStyles.subHeader}`}>
                        {subTitle}
                    </div>
                )}
            </div>
        );
    }
}
