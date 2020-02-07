import React, { Component } from "react";
import PropTypes from "prop-types";

import { Grid, Row, Col, Icon, Panel, Header } from "base-layout";

export default class DocumentationIcon extends Component {
    static propTypes = {
        text: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            altIcons: false,
            iconAppList: [
                { name: "add-circle-outline" },
                { name: "add-circle" },
                { name: "add" },
                { name: "airplane" },
                { name: "alarm" },
                { name: "albums" },
                { name: "alert" },
                { name: "american-football" },

                { name: "analytics" },
                { name: "aperture" },
                { name: "apps" },
                { name: "appstore" },
                { name: "archive" },
                { name: "arrow-back" },
                { name: "arrow-down" },
                { name: "arrow-dropdown-circle" },

                { name: "arrow-dropdown" },
                { name: "arrow-dropleft-circle" },
                { name: "arrow-dropleft" },
                { name: "arrow-dropright-circle" },
                { name: "arrow-dropright" },
                { name: "arrow-dropup-circle" },
                { name: "arrow-dropup" },
                { name: "arrow-forward" },

                { name: "arrow-round-back" },
                { name: "arrow-round-down" },
                { name: "arrow-round-forward" },
                { name: "arrow-round-up" },
                { name: "arrow-up" },
                { name: "at" },
                { name: "attach" },
                { name: "backspace" },

                { name: "barcode" },
                { name: "baseball" },
                { name: "basket" },
                { name: "basketball" },
                { name: "battery-charging" },
                { name: "battery-dead" },
                { name: "battery-full" },
                { name: "beaker" },

                { name: "bed" },
                { name: "beer" },
                { name: "bicycle" },
                { name: "bluetooth" },
                { name: "boat" },
                { name: "body" },
                { name: "bonfire" },
                { name: "book" },

                { name: "bookmark" },
                { name: "bookmarks" },
                { name: "bowtie" },
                { name: "briefcase" },
                { name: "browsers" },
                { name: "brush" },
                { name: "bug" },
                { name: "build" },

                { name: "bulb" },
                { name: "bus" },
                { name: "business" },
                { name: "cafe" },
                { name: "calculator" },
                { name: "calendar" },
                { name: "call" },
                { name: "camera" },

                { name: "car" },
                { name: "card" },
                { name: "cart" },
                { name: "cash" },
                { name: "cellular" },
                { name: "chatboxes" },
                { name: "chatbubbles" },
                { name: "checkbox-outline" },

                { name: "checkbox" },
                { name: "checkmark-circle-outline" },
                { name: "checkmark-circle" },
                { name: "checkmark" },
                { name: "clipboard" },
                { name: "clock" },
                { name: "close-circle-outline" },
                { name: "close-circle" },

                { name: "close" },
                { name: "cloud-circle" },
                { name: "cloud-done" },
                { name: "cloud-download" },
                { name: "cloud-outline" },
                { name: "cloud-upload" },
                { name: "cloud" },
                { name: "cloudy-night" },

                { name: "cloudy" },
                { name: "code-download" },
                { name: "code-working" },
                { name: "code" },
                { name: "cog" },
                { name: "color-fill" },
                { name: "color-filter" },
                { name: "color-palette" },

                { name: "color-wand" },
                { name: "compass" },
                { name: "construct" },
                { name: "contact" },
                { name: "contacts" },
                { name: "contract" },
                { name: "contrast" },
                { name: "copy" },

                { name: "create" },
                { name: "crop" },
                { name: "cube" },
                { name: "cut" },
                { name: "desktop" },
                { name: "disc" },
                { name: "document" },
                { name: "done-all" },

                { name: "download" },
                { name: "easel" },
                { name: "egg" },
                { name: "exit" },
                { name: "expand" },
                { name: "eye-off" },
                { name: "eye" },
                { name: "fastforward" },

                { name: "female" },
                { name: "filing" },
                { name: "film" },
                { name: "finger-print" },
                { name: "fitness" },
                { name: "flag" },
                { name: "flame" },
                { name: "flash-off" },

                { name: "flash" },
                { name: "flashlight" },
                { name: "flask" },
                { name: "flower" },
                { name: "folder-open" },
                { name: "folder" },
                { name: "football" },
                { name: "funnel" },

                { name: "gift" },
                { name: "git-branch" },
                { name: "git-commit" },
                { name: "git-compare" },
                { name: "git-merge" },
                { name: "git-network" },
                { name: "git-pull-request" },
                { name: "glasses" },

                { name: "globe" },
                { name: "grid" },
                { name: "hammer" },
                { name: "hand" },
                { name: "happy" },
                { name: "headset" },
                { name: "heart" },
                { name: "heart-dislike" },

                { name: "heart-empty" },
                { name: "heart-half" },
                { name: "help-buoy" },
                { name: "help-circle-outline" },
                { name: "help-circle" },
                { name: "help" },
                { name: "home" },
                { name: "hourglass" },

                { name: "ice-cream" },
                { name: "image" },
                { name: "images" },
                { name: "infinite" },
                { name: "information-circle-outline" },
                { name: "information-circle" },
                { name: "information" },
                { name: "jet" },

                { name: "journal" },
                { name: "key" },
                { name: "keypad" },
                { name: "laptop" },
                { name: "leaf" },
                { name: "link" },
                { name: "list-box" },
                { name: "list" },

                { name: "locate" },
                { name: "lock" },
                { name: "log-in" },
                { name: "log-out" },
                { name: "magnet" },
                { name: "mail-open" },
                { name: "mail-unread" },
                { name: "mail" },

                { name: "male" },
                { name: "man" },
                { name: "map" },
                { name: "medal" },
                { name: "medical" },
                { name: "medkit" },
                { name: "megaphone" },
                { name: "menu" },

                { name: "mic-off" },
                { name: "mic" },
                { name: "microphone" },
                { name: "moon" },
                { name: "more" },
                { name: "move" },
                { name: "musical-note" },
                { name: "musical-notes" },

                { name: "navigate" },
                { name: "notifications-off" },
                { name: "notifications-outline" },
                { name: "notifications" },
                { name: "nuclear" },
                { name: "nutrition" },
                { name: "open" },
                { name: "options" },

                { name: "outlet" },
                { name: "paper-plane" },
                { name: "paper" },
                { name: "partly-sunny" },
                { name: "pause" },
                { name: "paw" },
                { name: "people" },
                { name: "person-add" },

                { name: "person" },
                { name: "phone-landscape" },
                { name: "phone-portrait" },
                { name: "photos" },
                { name: "pie" },
                { name: "pin" },
                { name: "pint" },
                { name: "pizza" },

                { name: "planet" },
                { name: "play-circle" },
                { name: "play" },
                { name: "podium" },
                { name: "power" },
                { name: "pricetag" },
                { name: "pricetags" },
                { name: "print" },

                { name: "pulse" },
                { name: "qr-scanner" },
                { name: "quote" },
                { name: "radio-button-off" },
                { name: "radio-button-on" },
                { name: "radio" },
                { name: "rainy" },
                { name: "recording" },

                { name: "redo" },
                { name: "refresh-circle" },
                { name: "refresh" },
                { name: "remove-circle-outline" },
                { name: "remove-circle" },
                { name: "remove" },
                { name: "reorder" },
                { name: "repeat" },

                { name: "resize" },
                { name: "restaurant" },
                { name: "return-left" },
                { name: "return-right" },
                { name: "reverse-camera" },
                { name: "rewind" },
                { name: "ribbon" },
                { name: "rocket" },

                { name: "rose" },
                { name: "sad" },
                { name: "save" },
                { name: "school" },
                { name: "search" },
                { name: "send" },
                { name: "settings" },
                { name: "share-alt" },

                { name: "share" },
                { name: "shirt" },
                { name: "shuffle" },
                { name: "skip-backward" },
                { name: "skip-forward" },
                { name: "snow" },
                { name: "speedometer" },
                { name: "square-outline" },

                { name: "square" },
                { name: "star-half" },
                { name: "star-outline" },
                { name: "star" },
                { name: "stats" },
                { name: "stopwatch" },
                { name: "subway" },
                { name: "sunny" },

                { name: "swap" },
                { name: "switch" },
                { name: "sync" },
                { name: "tablet-landscape" },
                { name: "tablet-portrait" },
                { name: "tennisball" },
                { name: "text" },
                { name: "thermometer" },

                { name: "thumbs-down" },
                { name: "thumbs-up" },
                { name: "thunderstorm" },
                { name: "time" },
                { name: "timer" },
                { name: "today" },
                { name: "train" },
                { name: "transgender" },

                { name: "trash" },
                { name: "trending-down" },
                { name: "trending-up" },
                { name: "trophy" },
                { name: "tv" },
                { name: "umbrella" },
                { name: "undo" },
                { name: "unlock" },

                { name: "videocam" },
                { name: "volume-high" },
                { name: "volume-low" },
                { name: "volume-mute" },
                { name: "volume-off" },
                { name: "wallet" },
                { name: "walk" },
                { name: "warning" },

                { name: "watch" },
                { name: "water" },
                { name: "wifi" },
                { name: "wine" },
                { name: "woman" }
            ],
            iconBrandList: [
                { name: "logo-android" },
                { name: "logo-angular" },
                { name: "logo-apple" },
                { name: "logo-bitbucket" },
                { name: "logo-bitcoin" },
                { name: "logo-buffer" },
                { name: "logo-chrome" },
                { name: "logo-closed-captioning" },

                { name: "logo-codepen" },
                { name: "logo-css3" },
                { name: "logo-designernews" },
                { name: "logo-dribbble" },
                { name: "logo-dropbox" },
                { name: "logo-euro" },
                { name: "logo-facebook" },
                { name: "logo-flickr" },

                { name: "logo-foursquare" },
                { name: "logo-freebsd-devil" },
                { name: "logo-game-controller-a" },
                { name: "logo-game-controller-b" },
                { name: "logo-github" },
                { name: "logo-google" },
                { name: "logo-googleplus" },
                { name: "logo-hackernews" },

                { name: "logo-html5" },
                { name: "logo-instagram" },
                { name: "logo-ionic" },
                { name: "logo-ionitron" },
                { name: "logo-javascript" },
                { name: "logo-linkedin" },
                { name: "logo-markdown" },
                { name: "logo-model-s" },

                { name: "logo-no-smoking" },
                { name: "logo-nodejs" },
                { name: "logo-npm" },
                { name: "logo-octocat" },
                { name: "logo-pinterest" },
                { name: "logo-playstation" },
                { name: "logo-polymer" },
                { name: "logo-python" },

                { name: "logo-reddit" },
                { name: "logo-rss" },
                { name: "logo-sass" },
                { name: "logo-skype" },
                { name: "logo-slack" },
                { name: "logo-snapchat" },
                { name: "logo-steam" },
                { name: "logo-tumblr" },

                { name: "logo-tux" },
                { name: "logo-twitch" },
                { name: "logo-twitter" },
                { name: "logo-usd" },
                { name: "logo-vimeo" },
                { name: "logo-vk" },
                { name: "logo-whatsapp" },
                { name: "logo-windows" },

                { name: "logo-wordpress" },
                { name: "logo-xbox" },
                { name: "logo-xing" },
                { name: "logo-yahoo" },
                { name: "logo-yen" },
                { name: "logo-youtube" }
            ]
        };
    }

    render() {
        const { iconAppList, iconBrandList, altIcons } = this.state;

        return (
            <Row>
                <Col>
                    <Panel color="lightblue">
                        <Header
                            title="Icon"
                            subTitle="UI Framework Icon Documentation"
                            color="white"
                        />
                    </Panel>
                </Col>
                <Col padded>
                    <Grid width={720}>
                        <Row>
                            <Col>
                                <Panel rounded color="white">
                                    <Header title="Basic Icon" />

                                    <Icon name="trash" alternative={altIcons} />
                                </Panel>
                                <br />
                                <Panel rounded color="white">
                                    <Header title="Sizes" />

                                    <Icon
                                        name="trash"
                                        size="xxl"
                                        alternative={altIcons}
                                    />
                                    <br />
                                    <Icon
                                        name="trash"
                                        size="xl"
                                        alternative={altIcons}
                                    />
                                    <br />
                                    <Icon
                                        name="trash"
                                        size="l"
                                        alternative={altIcons}
                                    />
                                    <br />
                                    <Icon
                                        name="trash"
                                        size="m"
                                        alternative={altIcons}
                                    />
                                    <br />
                                    <Icon
                                        name="trash"
                                        size="s"
                                        alternative={altIcons}
                                    />
                                    <br />
                                    <Icon
                                        name="trash"
                                        size="xs"
                                        alternative={altIcons}
                                    />
                                </Panel>
                                <br />
                                <Panel rounded color="white">
                                    <Header
                                        title="Shape"
                                        subTitle="An icon can be displayed as square
                                        shaped or circular shaped object."
                                    />

                                    <Icon
                                        name="trash"
                                        background="black"
                                        color="white"
                                        alternative={altIcons}
                                    />
                                    <Icon
                                        name="trash"
                                        background="black"
                                        color="white"
                                        circle
                                        alternative={altIcons}
                                    />
                                </Panel>
                                <br />
                                <Panel rounded color="white">
                                    <Header
                                        title="Padding"
                                        subTitle="An icon can have an internal padding, to
                                        show more of its outsides."
                                    />

                                    <Icon
                                        name="trash"
                                        background="black"
                                        padded
                                        color="white"
                                        alternative={altIcons}
                                    />
                                    <Icon
                                        name="trash"
                                        background="black"
                                        padded
                                        color="white"
                                        circle
                                        alternative={altIcons}
                                    />
                                </Panel>
                                <br />
                                <Panel rounded color="white">
                                    <Header
                                        title="Colors"
                                        subTitle="An icon have different colors."
                                    />
                                    <Icon
                                        name="trash"
                                        background="green"
                                        padded
                                        color="teal"
                                        alternative={altIcons}
                                    />
                                    <Icon
                                        name="trash"
                                        background="lightblue"
                                        padded
                                        color="yellow"
                                        circle
                                        alternative={altIcons}
                                    />
                                </Panel>
                                <br />
                                <Panel rounded color="white">
                                    <Header
                                        title="Disabled"
                                        subTitle="An icon Can also appear to be disabled,
                                        wich overrides its color with grey."
                                    />

                                    <Icon
                                        disabled
                                        name="trash"
                                        background="black"
                                        padded
                                        color="yellow"
                                        circle
                                        alternative={altIcons}
                                    />
                                </Panel>
                                <br />
                                <Panel rounded color="white">
                                    <Header
                                        title="Icons"
                                        subTitle={`This framwork uses Ionicons as Icon
                                        library, the following is an overview of
                                        all
                                        ${Number(
                                            Number(iconAppList.length) +
                                                Number(iconBrandList.length)
                                        )}
                                        icons included. It also contains of an
                                        alternative set of icons, making it a
                                        total of 
                                        ${Number(
                                            Number(
                                                Number(iconAppList.length) +
                                                    Number(iconBrandList.length)
                                            ) * 2
                                        )}
                                        icons.`}
                                    />

                                    <h3>Application Icons</h3>

                                    <Grid width={600}>
                                        <Row padded>
                                            <Col padded>
                                                {iconAppList.map(icon => {
                                                    return (
                                                        <Icon
                                                            name={icon.name}
                                                            size="xl"
                                                            padded
                                                            alternative={
                                                                altIcons
                                                            }
                                                        />
                                                    );
                                                })}
                                            </Col>
                                        </Row>
                                    </Grid>

                                    <h3>Brand Icons</h3>
                                    <Grid width={600}>
                                        <Row padded>
                                            <Col padded>
                                                {iconBrandList.map(icon => {
                                                    return (
                                                        <Icon
                                                            name={icon.name}
                                                            size="xl"
                                                            padded
                                                            alternative={false}
                                                        />
                                                    );
                                                })}
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
