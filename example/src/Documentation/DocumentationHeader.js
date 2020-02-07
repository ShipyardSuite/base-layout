import React, { Component } from "react";
import PropTypes from "prop-types";

import { Grid, Row, Col, Panel, Header } from "base-layout";

export default class DocumentationHeader extends Component {
    static propTypes = {
        text: PropTypes.string
    };

    render() {
        return (
            <Row>
                <Col>
                    <Panel color="lightblue">
                        <Header
                            title="Header"
                            subTitle="UI Framework Header Documentation"
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
                                        title="Simple Header"
                                        subTitle="A simple header with only a title."
                                    />

                                    <Header title="Header Title" />
                                </Panel>
                                <br />
                                <Panel rounded color="white">
                                    <Header
                                        title="Header with subtitle"
                                        subTitle="A Header can contain a subtitle, if no
                                        subtitle is given, it will only display
                                        the header title."
                                    />

                                    <Header
                                        title="Header Title"
                                        subTitle="Subtitle of Header"
                                    />
                                </Panel>
                                <br />
                                <Panel rounded color="white">
                                    <Header
                                        title="Size"
                                        subTitle="A header can have sizes from xs to xxl,
                                        wich are equivalent to h6 - h1."
                                    />

                                    <Header
                                        title="XXL sized Header"
                                        subTitle="Size equal to H1"
                                        size="xxl"
                                    />
                                    <br />

                                    <Header
                                        title="XL sized Header"
                                        subTitle="Size equal to H2"
                                        size="xl"
                                    />
                                    <br />

                                    <Header
                                        title="L sized Header"
                                        subTitle="Size equal to H3"
                                        size="l"
                                    />
                                    <br />

                                    <Header
                                        title="M sized Header"
                                        subTitle="Size equal to H4"
                                        size="m"
                                    />
                                    <br />

                                    <Header
                                        title="S sizeed Header"
                                        subTitle="Size equal to H5"
                                        size="s"
                                    />
                                    <br />

                                    <Header
                                        title="XS sized Header"
                                        subTitle="Size equal to H6"
                                        size="xs"
                                    />
                                </Panel>
                                <br />
                                <Panel rounded color="white">
                                    <Header
                                        title="Color"
                                        subTitle="A header can have its own color."
                                    />

                                    <Header
                                        title="Sample Header"
                                        subTitle="This header has a different color"
                                        size="xl"
                                        color="teal"
                                    />
                                </Panel>
                            </Col>
                        </Row>
                    </Grid>
                </Col>
            </Row>
        );
    }
}
