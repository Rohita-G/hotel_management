import React, { Component, Fragment } from 'react';
import Testimonials from '../home/Testmonials';
import Blogpost from '../home/Blogpost';
import Videowrap from './Videowrap';
import Instagram from './Instagram';
import Counter from './Counter';
import Mainbanner from './Mainbanner';
import Bookingform from '../home/Bookingform';
import Textblock from './Textblock';
import Corefeature from './Corefeature';
import Featureroom from './Featureroom';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Mainbanner />
                <section className="booking-form">
                    <div className="container">
                        <Bookingform />
                    </div>
                </section>
                <Textblock />
                <Corefeature />
                <Featureroom />
                <section className="counter-section bg-black pt-100 pb-50">
                    <div className="container">
                        <Counter />
                    </div>
                </section>
                <Testimonials />
                <Videowrap />
                <Blogpost />
                <Instagram />
            </Fragment>
        );
    }
}

export default Content;