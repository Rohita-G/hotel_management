import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import category from '../../../data/category.json';
import $ from 'jquery';
import 'magnific-popup';

class Aboutpage extends Component {
    componentDidMount() {
        function popup() {
            $('.popup-video').magnificPopup({
                type: 'iframe'
            });
        }
        popup();
    }
    render() {
        return (
            <section className="about-section pt-115 pb-115">
                <div className="container">
                    <div className="video-wrap video-wrap-two video-about mb-60" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/text-block/04.jpg)" }}>
                        <a rel={'external'} href="https://www.youtube.com/embed/EEJFMdfraVY" className="popup-video"><i className="fas fa-play" /></a>
                    </div>
                    <div className="section-title about-title text-center">
                        <span className="title-tag">since <span>1994</span></span>
                        <h2>Hello. Our hotel has been present for over 20 years. We make the best or all our customers.</h2>
                    </div>
                    <ul className="about-features">
                        {category.slice(0, 5).map((item, i) => (
                            <li key={i}>
                                <Link to="#">
                                    <i className={item.icon} />
                                    <i className={"hover-icon " + item.icon} />
                                    <span className="title">{item.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="about-text-box">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="about-img">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/text-block/05.jpg"} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-text">
                                    <span>Restaurant</span>
                                    <h3>Get Restaurant Facilities &amp; Many Other More</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem por
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip.
                    </p>
                                    <Link to="/contact" className="main-btn btn-filled">take a tour</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Aboutpage;