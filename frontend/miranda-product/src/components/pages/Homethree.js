import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerthree';
import Footer from '../layouts/Footertwo';
import Content from '../sections/home-v3/Content';

const pagelocation = 'Homepage'

class Homethree extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Hotel Miranda - React Template | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Content/>
                <Footer footer={{ style:"light-theme", logo:"assets/img/logo.png" }}/>
            </Fragment>
        );
    }
}

export default Homethree;