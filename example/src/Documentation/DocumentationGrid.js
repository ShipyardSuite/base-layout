import React, { Component } from "react";
import PropTypes from "prop-types";

import { Grid, Row, Col, Panel, Header } from "base-layout";

export default class DocumentationGrid extends Component {
    static propTypes = {
        text: PropTypes.string
    };

    render() {
        return (
            <Row>
                <Col>
                    <Panel color="lightblue">
                        <Header
                            title="Grid"
                            subTitle="UI Framework Grid Documentation"
                            color="white"
                        />
                    </Panel>
                </Col>
                <Col padded>
                    <Grid width={720}>
                        <Row>
                            <Col>
                                <Panel rounded color="white">
                                    
                                <Header
                                    title="Fluid Grid"
                                    subTitle=""
                                />

                                    <Grid fluid>
                                        <Row>
                                            <Col>
                                                <Panel rounded color="lightblue" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col width={1}>
                                                <Panel rounded color="lightblue" />
                                            </Col>
                                            <Col width={11}>
                                                <Panel rounded color="lightblue" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col width={2}>
                                                <Panel rounded color="lightblue" />
                                            </Col>
                                            <Col width={10}>
                                                <Panel rounded color="lightblue" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col width={3}>
                                                <Panel rounded color="lightblue" />
                                            </Col>
                                            <Col width={9}>
                                                <Panel rounded color="lightblue" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col width={4}>
                                                <Panel rounded color="lightblue" />
                                            </Col>
                                            <Col width={8}>
                                                <Panel rounded color="lightblue" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col width={5}>
                                                <Panel rounded color="lightblue" />
                                            </Col>
                                            <Col width={7}>
                                                <Panel rounded color="lightblue" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col width={6}>
                                                <Panel rounded color="lightblue" />
                                            </Col>
                                            <Col width={6}>
                                                <Panel rounded color="lightblue" />
                                            </Col>
                                        </Row>
                                    </Grid>
                                </Panel>
                                <br/>
                                <Panel rounded color="white">

                                    <Header
                                        title="Responsive"
                                        subTitle=""
                                    />
                                </Panel>
                                <br/>
                                <Panel rounded color="white">

                                    <Header
                                        title="Gutterless"
                                        subTitle=""
                                    />

                                    <Grid fluid>
                                        <Row gutter={false}>
                                            <Col width={3}>
                                                <Panel rounded color="lightblue" />
                                            </Col>
                                            <Col width={3}>
                                                <Panel rounded color="lightblue" />
                                            </Col>
                                            <Col width={3}>
                                                <Panel rounded color="lightblue" />
                                            </Col>
                                            <Col width={3}>
                                                <Panel rounded color="lightblue" />
                                            </Col>
                                        </Row>
                                        <Row gutter={false}>
                                            <Col width={4}>
                                                <Panel rounded color="lightblue" />
                                            </Col>
                                            <Col width={4}>
                                                <Panel rounded color="lightblue" />
                                            </Col>
                                            <Col width={4}>
                                                <Panel rounded color="lightblue" />
                                            </Col>
                                        </Row>
                                        <Row gutter={false}>
                                            <Col width={6}>
                                                <Panel rounded color="lightblue" />
                                            </Col>
                                            <Col width={6}>
                                                <Panel rounded color="lightblue" />
                                            </Col>
                                        </Row>
                                    </Grid>
                                </Panel>
                                <br/>
                                <Panel rounded color="white">

                                    <Header
                                        title="Nested"
                                        subTitle=""
                                    />

                                    <Grid fluid>
                                        <Row>
                                            <Col>
                                                <Panel
                                                    color="lightblue"
                                                    padded={false}
                                                    rounded
                                                >
                                                    <Grid fluid>
                                                        <Row>
                                                            <Col width={6}>
                                                                <Panel
                                                                    rounded
                                                                    color="white"
                                                                />
                                                            </Col>
                                                            <Col width={6}>
                                                                <Panel
                                                                    rounded
                                                                    color="white"
                                                                />
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col width={3}>
                                                                <Panel
                                                                    rounded
                                                                    color="white"
                                                                />
                                                            </Col>
                                                            <Col width={9}>
                                                                <Panel
                                                                    rounded
                                                                    color="white"
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </Grid>
                                                </Panel>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </Panel>
                                <br/>
                                <Panel rounded color="white">

                                    <Header
                                        title="Text alignment"
                                        subTitle=""
                                    />

                                    <Grid fluid>
                                        <Row>
                                            <Col width={4} textAlign="left">
                                                <Panel
                                                    rounded
                                                    color="lightblue"
                                                    textAlign="left"
                                                >
                                                    <span style={{ color: "white" }}>
                                                        Left...
                                                    </span>
                                                </Panel>
                                            </Col>
                                            <Col width={4} textAlign="center">
                                                <Panel
                                                    rounded
                                                    color="lightblue"
                                                    textAlign="center"
                                                >
                                                    <span style={{ color: "white" }}>
                                                        Center...
                                                    </span>
                                                </Panel>
                                            </Col>
                                            <Col width={4} textAlign="right">
                                                <Panel
                                                    rounded
                                                    color="lightblue"
                                                    textAlign="right"
                                                >
                                                    <span style={{ color: "white" }}>
                                                        Right...
                                                    </span>
                                                </Panel>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </Panel>
                                <br/>
                                <Panel rounded color="white">

                                    <Header
                                        title="Equal height columns"
                                        subTitle=""
                                    />

                                    <Panel rounded color="lightblue">
                                        <Grid fluid>
                                            <Row equal>
                                                <Col width={6}>
                                                    <Panel rounded color="white">
                                                        Lorem ipsum dolor sit amet,
                                                        consetetur sadipscing elitr, sed
                                                        diam nonumy eirmod tempor invidunt
                                                        ut labore et dolore magna aliquyam
                                                        erat, sed diam voluptua. At vero eos
                                                        et accusam et justo duo dolores et
                                                        ea rebum. Stet clita kasd gubergren.
                                                    </Panel>
                                                </Col>
                                                <Col width={6}>
                                                    <Panel rounded color="white">
                                                        Other content...
                                                    </Panel>
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </Panel>
                                </Panel>
                                <br/>
                                <Panel rounded color="white">

                                <Header
                                    title="Breakpoints"
                                    subTitle=""
                                />


                                </Panel>
                                <br/>
                                <Panel rounded color="white">

                                    <Header
                                        title="Colors"
                                        subTitle="Any row can have it's own color."
                                    />
                                    
                                    <Grid fluid>
                                        <Row padded color="red" textAlign="center">
                                            <span style={{ color: "white" }}>Red</span>
                                        </Row>
                                        <Row padded color="pink" textAlign="center">
                                            <span style={{ color: "white" }}>Pink</span>
                                        </Row>
                                        <Row padded color="purple" textAlign="center">
                                            <span style={{ color: "white" }}>Purple</span>
                                        </Row>
                                        <Row padded color="deeppurple" textAlign="center">
                                            <span style={{ color: "white" }}>
                                                Deep Purple
                                            </span>
                                        </Row>
                                        <Row padded color="indigo" textAlign="center">
                                            <span style={{ color: "white" }}>Indigo</span>
                                        </Row>
                                        <Row padded color="blue" textAlign="center">
                                            <span style={{ color: "white" }}>Blue</span>
                                        </Row>
                                        <Row padded color="lightblue" textAlign="center">
                                            <span style={{ color: "white" }}>
                                                Light Blue
                                            </span>
                                        </Row>
                                        <Row padded color="cyan" textAlign="center">
                                            <span style={{ color: "white" }}>Cyan</span>
                                        </Row>
                                        <Row padded color="teal" textAlign="center">
                                            <span style={{ color: "white" }}>Teal</span>
                                        </Row>
                                        <Row padded color="green" textAlign="center">
                                            <span style={{ color: "white" }}>Green</span>
                                        </Row>
                                        <Row padded color="lightgreen" textAlign="center">
                                            <span style={{ color: "white" }}>
                                                Light Green
                                            </span>
                                        </Row>
                                        <Row padded color="lime" textAlign="center">
                                            <span style={{ color: "white" }}>Lime</span>
                                        </Row>
                                        <Row padded color="yellow" textAlign="center">
                                            <span style={{ color: "white" }}>Yellow</span>
                                        </Row>
                                        <Row padded color="amber" textAlign="center">
                                            <span style={{ color: "white" }}>Amber</span>
                                        </Row>
                                        <Row padded color="orange" textAlign="center">
                                            <span style={{ color: "white" }}>Orange</span>
                                        </Row>
                                        <Row padded color="deeporange" textAlign="center">
                                            <span style={{ color: "white" }}>
                                                Deep Orange
                                            </span>
                                        </Row>
                                        <Row padded color="brown" textAlign="center">
                                            <span style={{ color: "white" }}>Brown</span>
                                        </Row>
                                        <Row padded color="gray" textAlign="center">
                                            <span style={{ color: "white" }}>Gray</span>
                                        </Row>
                                        <Row padded color="bluegray" textAlign="center">
                                            <span style={{ color: "white" }}>
                                                Blue Gray
                                            </span>
                                        </Row>
                                        <Row padded color="black" textAlign="center">
                                            <span style={{ color: "white" }}>Black</span>
                                        </Row>
                                    </Grid>

                                    <p>Any column can have it's own background color.</p>
                                    <Grid fluid>
                                        <Row gutter={false}>
                                            <Col
                                                width={3}
                                                padded
                                                color="red"
                                                textAlign="center"
                                            >
                                                <span style={{ color: "white" }}>Red</span>
                                            </Col>
                                            <Col
                                                width={3}
                                                padded
                                                color="pink"
                                                textAlign="center"
                                            >
                                                <span style={{ color: "white" }}>Pink</span>
                                            </Col>
                                            <Col
                                                width={3}
                                                padded
                                                color="purple"
                                                textAlign="center"
                                            >
                                                <span style={{ color: "white" }}>
                                                    Purple
                                                </span>
                                            </Col>
                                            <Col
                                                width={3}
                                                padded
                                                color="deeppurple"
                                                textAlign="center"
                                            >
                                                <span style={{ color: "white" }}>
                                                    Deep Purple
                                                </span>
                                            </Col>
                                        </Row>
                                        <Row gutter={false}>
                                            <Col
                                                width={3}
                                                padded
                                                color="indigo"
                                                textAlign="center"
                                            >
                                                <span style={{ color: "white" }}>
                                                    Indigo
                                                </span>
                                            </Col>
                                            <Col
                                                width={3}
                                                padded
                                                color="blue"
                                                textAlign="center"
                                            >
                                                <span style={{ color: "white" }}>Blue</span>
                                            </Col>
                                            <Col
                                                width={3}
                                                padded
                                                color="lightblue"
                                                textAlign="center"
                                            >
                                                <span style={{ color: "white" }}>
                                                    Light Blue
                                                </span>
                                            </Col>
                                            <Col
                                                width={3}
                                                padded
                                                color="cyan"
                                                textAlign="center"
                                            >
                                                <span style={{ color: "white" }}>Cyan</span>
                                            </Col>
                                        </Row>
                                        <Row gutter={false}>
                                            <Col
                                                width={3}
                                                padded
                                                color="teal"
                                                textAlign="center"
                                            >
                                                <span style={{ color: "white" }}>Teal</span>
                                            </Col>
                                            <Col
                                                width={3}
                                                padded
                                                color="green"
                                                textAlign="center"
                                            >
                                                <span style={{ color: "white" }}>
                                                    Green
                                                </span>
                                            </Col>
                                            <Col
                                                width={3}
                                                padded
                                                color="lightgreen"
                                                textAlign="center"
                                            >
                                                <span style={{ color: "white" }}>
                                                    Light Green
                                                </span>
                                            </Col>
                                            <Col
                                                width={3}
                                                padded
                                                color="lime"
                                                textAlign="center"
                                            >
                                                <span style={{ color: "white" }}>Lime</span>
                                            </Col>
                                        </Row>
                                        <Row gutter={false}>
                                            <Col
                                                width={3}
                                                padded
                                                color="yellow"
                                                textAlign="center"
                                            >
                                                <span style={{ color: "white" }}>
                                                    Yellow
                                                </span>
                                            </Col>
                                            <Col
                                                width={3}
                                                padded
                                                color="amber"
                                                textAlign="center"
                                            >
                                                <span style={{ color: "white" }}>
                                                    Amber
                                                </span>
                                            </Col>
                                            <Col
                                                width={3}
                                                padded
                                                color="orange"
                                                textAlign="center"
                                            >
                                                <span style={{ color: "white" }}>
                                                    Orange
                                                </span>
                                            </Col>
                                            <Col
                                                width={3}
                                                padded
                                                color="deeporange"
                                                textAlign="center"
                                            >
                                                <span style={{ color: "white" }}>
                                                    Deep Orange
                                                </span>
                                            </Col>
                                        </Row>
                                        <Row gutter={false}>
                                            <Col
                                                width={3}
                                                padded
                                                color="brown"
                                                textAlign="center"
                                            >
                                                <span style={{ color: "white" }}>
                                                    Brown
                                                </span>
                                            </Col>
                                            <Col
                                                width={3}
                                                padded
                                                color="gray"
                                                textAlign="center"
                                            >
                                                <span style={{ color: "white" }}>Gray</span>
                                            </Col>
                                            <Col
                                                width={3}
                                                padded
                                                color="bluegray"
                                                textAlign="center"
                                            >
                                                <span style={{ color: "white" }}>
                                                    Blue Gray
                                                </span>
                                            </Col>
                                            <Col
                                                width={3}
                                                padded
                                                color="black"
                                                textAlign="center"
                                            >
                                                <span style={{ color: "white" }}>
                                                    Black
                                                </span>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </Panel>
                            </Col>
                        </Row>
                    </Grid>
                </Col>
            </Row>
        );
    }
}
