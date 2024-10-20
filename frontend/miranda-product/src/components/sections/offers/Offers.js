import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import rooms from '../../../data/room.json';
import roomcategory from '../../../data/roomcategory.json';

class Offers extends Component {
    render() {
        return (
            <section className="offers-area pt-120 pb-60">
                <div className="container">
                    <div className="offer-boxes-loop">
                        {rooms.filter(function (item) { return item.offer === true }).map((item, i) => (
                            <div key={i} className="offer-box">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + "/" + item.listimage} className="w-100" alt={item.title} />
                                </div>
                                <div className="offer-desc">
                                    <div className="title-wrap">
                                        <div className="title">
                                            {item.category.slice(0, 1).map((category) => (
                                                roomcategory.filter(item => {
                                                    return item.id === category
                                                }).map((category, i) => (
                                                    <span key={i} className="room-cat">{category.title}</span>
                                                ))
                                            ))}

                                            <h2>{item.title}</h2>
                                        </div>
                                        <div className="price">
                                            ${new Intl.NumberFormat().format(item.price)}<span>/{item.period}</span>
                                        </div>
                                    </div>
                                    <div className="row justify-content-between">
                                        <div className="col-lg-6">
                                            <div className="offer-text">
                                                <p> {item.text} </p>
                                                <Link to={"/room-details/" + item.id} className="main-btn btn-filled">Book Now</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="offer-feature">
                                                <ul>
                                                    {item.amenities.slice(0, 10).map((item, i) => (
                                                        <li key={i}><i className={item.icon} /> {item.title}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Offers;