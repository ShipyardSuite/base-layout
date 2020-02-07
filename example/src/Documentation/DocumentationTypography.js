import React, { Component } from "react";
import PropTypes from "prop-types";

import { Grid, Row, Col, Panel, Header, BlockQuote, Button } from "base-layout";

export default class DocumentationTypography extends Component {
    static propTypes = {
        text: PropTypes.string
    };

    render() {
        return (
            <Row gutter={false}>
                <Col>
                    <Panel color="lightblue">
                        <Header
                            title="Code"
                            subTitle="UI Framework Code Documentation"
                            color="white"
                        />
                    </Panel>
                </Col>
                <Col padded>
                    <Grid width={720}>
                        <Row>
                            <Col>
                                <Panel rounded color="white">
                                    <BlockQuote
                                        quote="Hello, World!"
                                        author="The Internet"
                                    />
                                    <Button
                                        title="test"
                                        color="lightblue"
                                        onClick={() => console.log("hi")}
                                    ></Button>
                                    <Button
                                        color="lightgreen"
                                        basic
                                        onClick={() => console.log("hi")}
                                    >
                                        AnotherTest
                                    </Button>
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
