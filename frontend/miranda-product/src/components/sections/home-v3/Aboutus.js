import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

class Aboutus extends Component {
    render() {
        return (
            <section className="about-section pt-115 pb-115">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <Masonry className="row about-features-boxes fetaure-masonary">
                                <div className="col-sm-6">
                                    <div className="single-feature-box">
                                        <div className="icon">
                                            <i className="flaticon-team" />
                                        </div>
                                        <h4><Link to="#">Strong Team</Link></h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                    </p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="single-feature-box only-bg mt-30" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/feature/04.jpg)" }}>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="single-feature-box only-bg mt-30" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/feature/05.jpg)" }}>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="single-feature-box dark mt-30">
                                        <div className="icon">
                                            <i className="flaticon-hotel" />
                                        </div>
                                        <h4><Link to="#">Luxury Room</Link></h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                    </p>
                                    </div>
                                </div>
                            </Masonry>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-10">
                            <div className="abour-text pl-50 pr-50">
                                <div className="section-title mb-30">
                                    <span className="title-tag">about us</span>
                                    <h2>Discover Our Underground.</h2>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                                <Link to="/about" className="main-btn btn-filled mt-40"> Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-right-bottom">
                    <div className="about-bottom-img">
                        <img src={process.env.PUBLIC_URL + "/assets/img/bg/03.jpg"} alt="" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Aboutus;