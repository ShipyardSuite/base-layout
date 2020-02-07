"use strict";

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Code extends Component {
    static propTypes = {
        language: PropTypes.string
    };

    static defaultProps = {
        language: "javascript"
    };

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { text } = this.props;

        const styles = {};

        return (
            <div>test</div>
            // <SyntaxHighlighter
            //     language={this.props.language}
            //     showLineNumbers={true}
            //     style={githubGist}
            // >
            //     {this.props.children}
            // </SyntaxHighlighter>
        );
    }
}
