import React, { Component, Fragment } from 'react';
import Blogpost from '../home/Blogpost';
import Counter from '../home-v2/Counter';
import Banner from './Banner';
import Bookingform from '../home/Bookingform';
import Aboutus from './Aboutus';
import Roomslider from './Roomslider';
import Textblock from './Textblock';
import Corefeature from './Corefeature';
import Menuarea from './Menuarea';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <section className="booking-form booking-form-dark">
                    <div className="container">
                        <Bookingform />
                    </div>
                </section>
                <Aboutus/>
                <Roomslider/>
                <Textblock/>
                <Corefeature/>
                <Menuarea/>
                <section className="counter-section">
                    <div className="container">
                        <div className="counter-inner bg-black pt-100 pb-60">
                            <div className="row justify-content-center">
                                <div className="col-xl-10 col-11">
                                    <Counter />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Blogpost />
            </Fragment>
        );
    }
}

export default Content;