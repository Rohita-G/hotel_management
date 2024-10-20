import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import rooms from '../../../data/room.json'

class Featureroom extends Component {
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
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        };
        return (
            <section className="feature-room-section pt-155 pb-115">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8 col-sm-7">
                            <div className="section-title">
                                <span className="title-tag">Room</span>
                                <h2>Featured Room</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-5 d-none d-sm-block">
                            <div className="feature-room-arrow arrow-style text-right">
                            <div className="slick-arrow prev-arrow" onClick={this.previous}><i className="fal fa-arrow-left"></i></div>
                            <div className="slick-arrow next-arrow" onClick={this.next}><i className="fal fa-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>
                    {/* Room Looop */}
                    <Slider className="row room-gird-loop mt-80 feature-room-slider" {...settings} ref={slider => (this.slider = slider)}>
                        {rooms.map((item, i) => (
                            <div key={i} className="col-lg-12">
                                <div className="room-box">
                                    <div className="room-img-wrap">
                                        <div className="room-img" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.gridimage + ")" }} />
                                    </div>
                                    <div className="room-desc">
                                        <ul className="icons">
                                            {item.amenities.slice(0, 7).map((item, i) => (
                                                <li key={i}><i className={item.icon} /></li>
                                            ))}
                                        </ul>
                                        <h4 className="title"><Link to={"/room-details/" + item.id}>{item.title}</Link></h4>
                                        <p>{item.text.slice(0,75)}...</p>
                                        <span className="price">${new Intl.NumberFormat().format(item.price)}/{item.period}</span>
                                        <Link to={"/room-details/" + item.id} className="book-btn">Booking Now</Link>
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

export default Featureroom;