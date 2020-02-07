import React, { Component } from "react";
import PropTypes from "prop-types";

import { Grid, Row, Col, Panel, Header, Line } from "base-layout";

export default class DocumentationLine extends Component {
    static propTypes = {
        text: PropTypes.string
    };

    render() {
        return (
            <Row gutter={false}>
                <Col>
                    <Panel color="lightblue">
                        <Header
                            title="HorizontalLine"
                            subTitle="UI Framework HorizontalLine Documentation"
                            color="white"
                        />
                    </Panel>
                </Col>
                <Col padded>
                    <Grid width={720}>
                        <Row>
                            <Col>
                                <Panel rounded color="white">
                                    <Header title="Basic" />

                                    <Line />
                                </Panel>
                                <br />
                                <Panel rounded color="white">
                                    <Header title="Type" />
                                    <Line type="solid" size={3} />
                                    <Line type="dotted" size={3} />
                                    <Line type="dashed" size={3} />
                                </Panel>
                                <br />
                                <Panel rounded color="white">
                                    <Header title="Size" />

                                    <Line type="solid" size={1} />
                                    <Line type="solid" size={2} />
                                    <Line type="solid" size={3} />
                                    <Line type="solid" size={4} />
                                    <Line type="solid" size={5} />
                                    <Line type="solid" size={6} />
                                    <Line type="solid" size={7} />
                                    <Line type="solid" size={8} />
                                    <Line type="solid" size={9} />
                                    <Line type="solid" size={10} />
                                </Panel>
                                <br />
                                <Panel rounded color="white">
                                    <Header
                                        title="Color"
                                        subTitle="A Horizontal Line can have its own color"
                                    />

                                    <Line color="blue" size={5} />
                                </Panel>
                                <br />
                            </Col>
                        </Row>
                    </Grid>
                </Col>
            </Row>
        );
    }
}
