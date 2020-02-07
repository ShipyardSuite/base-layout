import React, { Component } from "react";
import PropTypes from "prop-types";

import { Grid, Row, Col, Panel, Header } from "base-layout";

export default class DocumentationPanel extends Component {
    static propTypes = {
        text: PropTypes.string
    };

    render() {
        return (
            <Row gutter={false}>
                <Col>
                    <Panel color="lightblue">
                        <Header
                            title="Panel"
                            subTitle="UI Framework Panel Documentation"
                            color="white"
                        />
                    </Panel>
                </Col>
                <Col padded>
                    <Grid width={720}>
                        <Row>
                            <Col>
                                <Panel rounded color="white">
                                    <Header title="Panel" />

                                    <Panel>Lorem ipsum dolor sit amet</Panel>
                                </Panel>
                                <br />
                                <Panel rounded color="white">
                                    <Header title="Basic Panel" />
                                    <Panel basic>
                                        Lorem ipsum dolor sit amet
                                    </Panel>
                                </Panel>
                                <br />
                                <Panel rounded color="white">
                                    <Header title="Panel with rounded corners" />
                                    <Panel rounded>
                                        Lorem ipsum dolor sit amet
                                    </Panel>
                                </Panel>
                                <br />
                                <Panel rounded color="white">
                                    <Col width={12}>
                                        <Header title="Text alignment" />
                                        <Panel basic textAlign="left">
                                            Lorem ipsum dolor sit amet
                                        </Panel>
                                        <Panel basic textAlign="center">
                                            Lorem ipsum dolor sit amet
                                        </Panel>
                                        <Panel basic textAlign="right">
                                            Lorem ipsum dolor sit amet
                                        </Panel>
                                    </Col>
                                </Panel>
                                <br />
                                <Panel rounded color="white">
                                    <Col width={12}>
                                        <Header title="Padding" />
                                        <Panel padded={false}>
                                            Lorem ipsum dolor sit amet
                                        </Panel>
                                        <Panel padded={true}>
                                            Lorem ipsum dolor sit amet
                                        </Panel>
                                    </Col>
                                </Panel>
                                <br />
                                <Panel rounded color="white">
                                    <Header
                                        title="Color"
                                        subTitle="Any panel can have it's own background
                                        color."
                                    />
                                    <Panel
                                        basic
                                        padded
                                        color="red"
                                        textAlign="center"
                                    >
                                        <span
                                            style={{
                                                color: "white"
                                            }}
                                        >
                                            Red
                                        </span>
                                    </Panel>
                                    <Panel
                                        basic
                                        padded
                                        color="pink"
                                        textAlign="center"
                                    >
                                        <span
                                            style={{
                                                color: "white"
                                            }}
                                        >
                                            Pink
                                        </span>
                                    </Panel>
                                    <Panel
                                        basic
                                        padded
                                        color="purple"
                                        textAlign="center"
                                    >
                                        <span
                                            style={{
                                                color: "white"
                                            }}
                                        >
                                            Purple
                                        </span>
                                    </Panel>
                                    <Panel
                                        basic
                                        padded
                                        color="deeppurple"
                                        textAlign="center"
                                    >
                                        <span
                                            style={{
                                                color: "white"
                                            }}
                                        >
                                            Deep Purple
                                        </span>
                                    </Panel>
                                    <Panel
                                        basic
                                        padded
                                        color="indigo"
                                        textAlign="center"
                                    >
                                        <span
                                            style={{
                                                color: "white"
                                            }}
                                        >
                                            Indigo
                                        </span>
                                    </Panel>
                                    <Panel
                                        basic
                                        padded
                                        color="blue"
                                        textAlign="center"
                                    >
                                        <span
                                            style={{
                                                color: "white"
                                            }}
                                        >
                                            Blue
                                        </span>
                                    </Panel>
                                    <Panel
                                        basic
                                        padded
                                        color="lightblue"
                                        textAlign="center"
                                    >
                                        <span
                                            style={{
                                                color: "white"
                                            }}
                                        >
                                            Light Blue
                                        </span>
                                    </Panel>
                                    <Panel
                                        basic
                                        padded
                                        color="cyan"
                                        textAlign="center"
                                    >
                                        <span
                                            style={{
                                                color: "white"
                                            }}
                                        >
                                            Cyan
                                        </span>
                                    </Panel>
                                    <Panel
                                        basic
                                        padded
                                        color="teal"
                                        textAlign="center"
                                    >
                                        <span
                                            style={{
                                                color: "white"
                                            }}
                                        >
                                            Teal
                                        </span>
                                    </Panel>
                                    <Panel
                                        basic
                                        padded
                                        color="green"
                                        textAlign="center"
                                    >
                                        <span
                                            style={{
                                                color: "white"
                                            }}
                                        >
                                            Green
                                        </span>
                                    </Panel>
                                    <Panel
                                        basic
                                        padded
                                        color="lightgreen"
                                        textAlign="center"
                                    >
                                        <span
                                            style={{
                                                color: "white"
                                            }}
                                        >
                                            Light Green
                                        </span>
                                    </Panel>
                                    <Panel
                                        basic
                                        padded
                                        color="lime"
                                        textAlign="center"
                                    >
                                        <span
                                            style={{
                                                color: "white"
                                            }}
                                        >
                                            Lime
                                        </span>
                                    </Panel>
                                    <Panel
                                        basic
                                        padded
                                        color="yellow"
                                        textAlign="center"
                                    >
                                        <span
                                            style={{
                                                color: "white"
                                            }}
                                        >
                                            Yellow
                                        </span>
                                    </Panel>
                                    <Panel
                                        basic
                                        padded
                                        color="amber"
                                        textAlign="center"
                                    >
                                        <span
                                            style={{
                                                color: "white"
                                            }}
                                        >
                                            Amber
                                        </span>
                                    </Panel>
                                    <Panel
                                        basic
                                        padded
                                        color="orange"
                                        textAlign="center"
                                    >
                                        <span
                                            style={{
                                                color: "white"
                                            }}
                                        >
                                            Orange
                                        </span>
                                    </Panel>
                                    <Panel
                                        basic
                                        padded
                                        color="deeporange"
                                        textAlign="center"
                                    >
                                        <span
                                            style={{
                                                color: "white"
                                            }}
                                        >
                                            Deep Orange
                                        </span>
                                    </Panel>
                                    <Panel
                                        basic
                                        padded
                                        color="brown"
                                        textAlign="center"
                                    >
                                        <span
                                            style={{
                                                color: "white"
                                            }}
                                        >
                                            Brown
                                        </span>
                                    </Panel>
                                    <Panel
                                        basic
                                        padded
                                        color="gray"
                                        textAlign="center"
                                    >
                                        <span
                                            style={{
                                                color: "white"
                                            }}
                                        >
                                            Gray
                                        </span>
                                    </Panel>
                                    <Panel
                                        basic
                                        padded
                                        color="bluegray"
                                        textAlign="center"
                                    >
                                        <span
                                            style={{
                                                color: "white"
                                            }}
                                        >
                                            Blue Gray
                                        </span>
                                    </Panel>
                                    <Panel
                                        basic
                                        padded
                                        color="black"
                                        textAlign="center"
                                    >
                                        <span
                                            style={{
                                                color: "white"
                                            }}
                                        >
                                            Black
                                        </span>
                                    </Panel>
                                </Panel>
                            </Col>
                        </Row>
                    </Grid>
                </Col>
            </Row>
        );
    }
}
