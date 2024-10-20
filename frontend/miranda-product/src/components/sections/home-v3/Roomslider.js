import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import rooms from '../../../data/room.json'

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div className="slick-arrow next-arrow" onClick={onClick}><i className="fal fa-arrow-right"></i></div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="slick-arrow prev-arrow" onClick={onClick}><i className="fal fa-arrow-left"></i></div>
    );
}

class Roomslider extends Component {
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: false,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 4000,
            arrows: true,
            dots: false,
            centerMode: true,
            centerPadding: '28%',
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        centerPadding: '20%',
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        centerPadding: '15%',
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        centerPadding: '10%',
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        centerPadding: '5%',
                    },
                },
            ]
        };
        return (
            <section className="room-slider bg-white pb-100 pt-115">
                <div className="container-fluid p-0">
                    <div className="section-title mb-80 text-center">
                        <span className="title-tag">Room</span>
                        <h2>Hand Picked Rooms</h2>
                    </div>
                    <Slider className="row rooms-slider-two justify-content-center" {...settings}>
                        {rooms.map((item, i) => (
                            <div key={i} className="col-lg-12">
                                <div className="single-rooms-box">
                                    <div className="room-img">
                                        <div className="img" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.sliderimage + ")" }}>
                                        </div>
                                    </div>
                                    <ul className="icons">
                                        {item.amenities.slice(0, 7).map((item, i) => (
                                            <li key={i}><i className={item.icon} /></li>
                                        ))}
                                    </ul>
                                    <div className="room-desc">
                                        <div className="row align-items-center">
                                            <div className="col-sm-8">
                                                <h3><Link to={"/room-details/" + item.id}>{item.title}</Link></h3>
                                                <p>{item.text.slice(0,100)}...</p>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="price">${new Intl.NumberFormat().format(item.price)}<span>/{item.period}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        );
    }
}

export default Roomslider;