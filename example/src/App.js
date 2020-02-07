import React, { Component } from "react";

import {
    DocumentationGrid,
    DocumentationHeader,
    DocumentationIcon,
    DocumentationPanel,
    DocumentationLine,
    DocumentationTypography,
    DocumentationMenu
} from "./Documentation";

import { Container, Grid, Row, Col } from "base-layout";

import "base-layout/Themes/default.css";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = { activePage: "Menu" };

        this.handleChangePage.bind(this);
    }

    handleChangePage(page) {
        this.setState({ activePage: page });
    }

    render() {
        const { activePage } = this.state;

        const menuItems = [
            { name: "Home" },
            { name: "Grid" },
            { name: "Menu" },
            { name: "Header" },
            { name: "Icon" },
            { name: "Panel" },
            { name: "Line" },
            { name: "Typography" }
        ];

        return (
            <Container>
                <Grid fluid>
                    <Row color="lightgray" gutter={false}>
                        <Col width={3} color="black">
                            {menuItems.map(item => {
                                return (
                                    <p
                                        style={{ color: "white" }}
                                        onClick={() =>
                                            this.handleChangePage(item.name)
                                        }
                                    >
                                        {item.name}
                                    </p>
                                );
                            })}
                        </Col>
                        <Col width={9}>
                            <Grid fluid>
                                {activePage === "Home" && <p>home...</p>}
                                {activePage === "Grid" && <DocumentationGrid />}
                                {activePage === "Menu" && <DocumentationMenu />}
                                {activePage === "Header" && (
                                    <DocumentationHeader />
                                )}
                                {activePage === "Icon" && <DocumentationIcon />}
                                {activePage === "Panel" && (
                                    <DocumentationPanel />
                                )}
                                {activePage === "Line" && <DocumentationLine />}
                                {activePage === "Typography" && (
                                    <DocumentationTypography />
                                )}
                            </Grid>
                        </Col>
                    </Row>
                </Grid>
            </Container>
        );
    }
}
