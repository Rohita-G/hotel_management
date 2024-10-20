import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'magnific-popup';

class Textblock extends Component {
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
            <section className="text-block bg-black with-pattern pt-115 pb-115">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10 order-2 order-lg-1">
                            <div className="block-text">
                                <div className="section-title mb-20">
                                    <span className="title-tag">intro video</span>
                                    <h2>Meet With Our
                        Luxury Place.</h2>
                                </div>
                                <p className="pr-50">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat you have to understand this.
                    </p>
                                <Link to="/room-details/1" className="main-btn btn-filled mt-40">Book now</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10 order-1 order-lg-2">
                            <div className="video-wrap video-wrap-two mb-small" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/text-block/03.jpg)" }}>
                                <a rel={'external'} href="https://www.youtube.com/embed/EEJFMdfraVY" className="popup-video"><i className="fas fa-play" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pattern-wrap">
                    <div className="pattern" />
                </div>
            </section>
        );
    }
}

export default Textblock;