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
    render() {
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
            <section className="menu-area pt-115 pb-115">
                <div className="container">
                    {/* Menu Looop */}
                    <div className="menu-loop">
                        <div className="row justify-content-center">
                            {splitEvery(menublock, 5).map((item, i) => (
                                <div key={i} className="col-lg-6 col-md-10">
                                    { item.map((item, i) => (
                                        <div key={i} className="single-menu-box">
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
                        </div>
                    </div>
                    {/* Gallery */}
                    <div className="gallery-wrap mt-100">
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
                </div>
            </section>
        );
    }
}

export default Menuarea;