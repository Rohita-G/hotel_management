import React, { Component, Fragment } from 'react';
import About from './About';
import Banner from './Banner';
import Bookingform from './Bookingform';
import Roomtype from './Roomtype';
import Cta from './Cta';
import Roomslider from './Roomslider';
import Textblock from './Textblock';
import Testmonials from './Testmonials';
import Roomgallery from './Roomgallery';
import Blogpost from './Blogpost';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <section className="booking-form boxed-layout">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <Bookingform />
                            </div>
                        </div>
                    </div>
                </section>
                <About />
                <Roomtype />
                <Cta />
                <Roomslider />
                <Textblock />
                <Testmonials />
                <Roomgallery />
                <Blogpost />
            </Fragment>
        );
    }
}

export default Content;