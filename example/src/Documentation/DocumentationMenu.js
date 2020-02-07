import React, { Component } from "react";
import PropTypes from "prop-types";

import { Grid, Row, Col, Panel, Header, Menu } from "base-layout";

export default class DocumentationMenu extends Component {
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
                                    <Menu />
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
