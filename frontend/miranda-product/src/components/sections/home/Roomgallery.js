import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Roomgallery extends Component {
    render() {
        return (
            <section className="room-gallery-cta" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/room-cta-gallery/bg.jpg)" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="cta-text text-center">
                                <span>our rooms</span>
                                <h2> Each of our nine lovely double guest rooms feature a private bath, wi-fi, cable television and include full breakfast. </h2>
                                <ul className="mt-50">
                                    <li><Link className="main-btn btn-filled" to="/room-details/1">take a tour</Link></li>
                                    <li><Link className="main-btn btn-border" to="/about">Learn More</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rotate-images">
                    <img src={process.env.PUBLIC_URL + "/assets/img/room-cta-gallery/01.jpg"} className="rotate-image-one" alt="" />
                    <img src={process.env.PUBLIC_URL + "/assets/img/room-cta-gallery/02.jpg"} className="rotate-image-two" alt="" />
                    <img src={process.env.PUBLIC_URL + "/assets/img/room-cta-gallery/03.jpg"} className="rotate-image-three" alt="" />
                </div>
            </section>
        );
    }
}

export default Roomgallery;