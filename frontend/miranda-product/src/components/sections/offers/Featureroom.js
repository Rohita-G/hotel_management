import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import rooms from '../../../data/room.json';

class Featureroom extends Component {
    render() {
        return (
            <section className="feature-room-section with-bg pt-155 pb-115" style={{ backgroundImage: 'url(assets/img/bg/06.jpg)' }}>
                <div className="container">
                    <div className="section-title white-color text-center">
                        <span className="title-tag">popular list</span>
                        <h2>Popular Rooms</h2>
                    </div>
                    {/* Room Looop */}
                    <div className="row room-gird-loop justify-content-center mt-30">
                        {rooms.slice(0,3).map((item, i) => (
                            <div key={i} className="col-lg-4 col-sm-6">
                                <div className="room-box mt-30">
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
                                        <p>{item.text.slice(0, 75)}...</p>
                                        <span className="price">${new Intl.NumberFormat().format(item.price)}/{item.period}</span>
                                        <Link to={"/room-details/" + item.id} className="book-btn">Booking Now</Link>
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

export default Featureroom;