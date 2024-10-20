import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import menublock from '../../../data/menu.json';
import gallery from '../../../data/menugallery.json';

const splitEvery = (array, length) =>
    array.reduce(
        (result, item, index) => {
            if (index % length === 0) result.push([])
            result[Math.floor(index / length)].push(item)
            return result
        },
        []
    )

class Menuarea extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            slidesToShow: 2,
            slidesToScroll: 2,
            fade: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ]
        };
        const gallerySettings = {
            slidesToShow: 3,
            slidesToScroll: 1,
            fade: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ]
        };
        return (
            <section className="menu-area bg-white menu-with-shape menu-nagative-gallery">
                <div className="container">
                    {/* section title */}
                    <div className="row align-items-center">
                        <div className="col-md-8 col-sm-8">
                            <div className="section-title">
                                <span className="title-tag">Menu</span>
                                <h2>Our Foods Menu</h2>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 d-none d-sm-block">
                            <div className="menu-slider-arrow arrow-style text-right">
                                <div className="slick-arrow prev-arrow" onClick={this.previous}><i className="fal fa-arrow-left"></i></div>
                                <div className="slick-arrow next-arrow" onClick={this.next}><i className="fal fa-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>
                    {/* Menu Slider */}
                    <Slider className="menu-slider mt-80 menu-loop single-slider row" {...settings} ref={slider => (this.slider = slider)}>
                        {splitEvery(menublock, 3).map((item, i) => (
                            <div key={i} className="col-lg-12">
                                { item.map((item, i) => (
                                    <div key={i} className="single-menu-box hover-drak">
                                        <div className="menu-img" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.img + ")" }}>
                                        </div>
                                        <div className="menu-desc">
                                            <h4><Link to="#">{item.title}</Link></h4>
                                            <p>{item.shortdesc}</p>
                                            <Link to="#" className="menu-link"><i className="fal fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </Slider>
                </div>
                {/* Gallery */}
                <div className="gallery-wrap">
                    <div className="container">
                        <Slider className="row gallery-slider text-center" {...gallerySettings}>
                            {gallery.map((item, i) => (
                                <div key={i} className="col-lg-12">
                                    <Link to="#" className="gallery-popup">
                                        <img src={process.env.PUBLIC_URL + "/" + item.img} alt="img" />
                                    </Link>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                {/* Shape */}
                <div className="shape-one">
                    <img src={process.env.PUBLIC_URL + "/assets/img/icon/05.png"} alt="icon" />
                </div>
                <div className="shape-two">
                    <img src={process.env.PUBLIC_URL + "/assets/img/icon/06.png"} alt="icon" />
                </div>
            </section>
        );
    }
}

export default Menuarea;