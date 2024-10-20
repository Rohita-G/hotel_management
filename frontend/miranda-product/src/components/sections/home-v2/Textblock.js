import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Textblock extends Component {
    render() {
        return (
            <section className="text-block pt-115 pb-115">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-7">
                            <div className="text-img text-center text-lg-left mb-small">
                                <img src={process.env.PUBLIC_URL + "/assets/img/text-block/02.jpg"} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-8 col-sm-10">
                            <div className="block-text">
                                <div className="section-title mb-20">
                                    <span className="title-tag">Take a tour</span>
                                    <h2>Discover Our Underground.</h2>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                                <Link to="/about" className="main-btn btn-filled mt-40">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Textblock;