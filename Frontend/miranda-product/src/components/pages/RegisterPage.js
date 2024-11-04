import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Breadcrumb from '../layouts/Breadcrumb';
import Content from '../sections/register/Content'; // Make sure this path matches where your content component is located

const pagelocation = 'Register';

class RegisterPage extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Hotel Miranda - React Template | {pagelocation}</title>
                    <meta name="description" content="Register to create a new account" />
                </MetaTags>
                <Header />
                <Breadcrumb breadcrumb={{ pagename: pagelocation }} />
                <Content>
                    {/* Inline styling for the Register button */}
                    <button style={{
                        position: 'relative',
                        backgroundColor: '#bead8e',
                        color: '#fff',
                        fontSize: '14px',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        border: 'none',
                        width: '200px',
                        letterSpacing: '3px',
                        padding: '15px 0',
                        transition: 'all 0.3s ease-out 0s'
                    }}>Register</button>
                </Content>
                <Footer />
            </Fragment>
        );
    }
}

export default RegisterPage;
