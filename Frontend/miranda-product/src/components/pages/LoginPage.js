import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Breadcrumb from '../layouts/Breadcrumb';
import Content from '../sections/login/Content';

const pagelocation = 'Login';

class LoginPage extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Hotel Miranda - React Template | {pagelocation}</title>
                    <meta name="description" content="Login to access your account" />
                </MetaTags>
                <Header />
                <Breadcrumb breadcrumb={{ pagename: pagelocation }} />
                <Content>
                    {/* Apply the same classes as the subscribe button */}
                    <button className="footer-subscribe-area subscribe-text subscribe-form">Login</button>
                </Content>
                <Footer />
            </Fragment>
        );
    }
}

export default LoginPage;