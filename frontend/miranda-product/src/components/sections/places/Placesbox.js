import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import places from '../../../data/places.json'

class Placesbox extends Component {
    render() {
        return (
            <div className="places-boxes pt-115">
                {/* Title */}
                <div className="section-title text-center mb-50">
                    <span className="title-tag">Popular</span>
                    <h2>Highlights Places</h2>
                </div>
                <div className="row justify-content-center">
                    {places.map((item, i) => (
                        <div key={i} className="col-lg-3 col-md-4 col-sm-6 col-10">
                            <div className="place-box mt-30">
                                <div className="place-bg-wrap">
                                    <div className="place-bg" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.gridimg + ")" }} />
                                </div>
                                <div className="desc">
                                    <h4><Link to={"/places-details/" + item.id}>{item.title}</Link></h4>
                                    <span className="time">{item.time}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Placesbox;