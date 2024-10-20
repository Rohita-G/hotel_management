import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const bannerPosts = [
    {
        photo: "assets/img/banner/01.jpg",
    },
    {
        photo: "assets/img/banner/02.jpg",
    }
];

class Banner extends Component {
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false,
            dots: false,
        };
        return (
            <section className="banner-area banner-style-one">
                <div className="container container-custom-two">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="banner-content">
                                <span className="promo-tag" >The ultimate luxury experience</span>
                                <h1 className="title"> The Perfect <br /> Base For You</h1>
                                <ul>
                                    <li>
                                        <Link className="main-btn btn-filled" to="/room-details/1">take a tour</Link>
                                    </li>
                                    <li>
                                        <Link className="main-btn btn-border" to="/about">Learn More</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="banner-thumb d-none d-md-block">
                                <Slider className="hero-slider-one" {...settings}>
                                    {bannerPosts.map((item, i) => (
                                        <div key={i} className="single-thumb">
                                            <img src={process.env.PUBLIC_URL + "/" + item.photo} alt="img" />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;