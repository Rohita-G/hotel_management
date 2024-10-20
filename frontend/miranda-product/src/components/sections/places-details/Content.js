import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import places from '../../../data/places.json'
import { getPlace } from '../../../helper/Placeshelper';

class Content extends Component {
    render() {
        const placeId = this.props.placeId;
        const item = getPlace(placeId);
        return (
            <section className="places-wrapper pt-120 pb-120">
                <div className="container">
                    <div className="places-details">
                        <div className="main-thumb mb-50">
                            <img src={process.env.PUBLIC_URL + "/" + item.gridimg} className="w-100" alt={item.title} />
                        </div>
                        <div className="title-wrap mb-50 d-flex align-items-center justify-content-between">
                            <div className="title">
                                <span className="place-cat">destination</span>
                                <h2>{item.title}</h2>
                            </div>
                            <div className="link">
                                <Link to={item.location}>direction</Link>
                            </div>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: item.longdesc }} />
                    </div>
                    {/* Places Boxes */}
                    <div className="places-boxes pt-115">
                        {/* Title */}
                        <div className="section-title text-center mb-50">
                            <span className="title-tag">Popular</span>
                            <h2>Highlights Places</h2>
                        </div>
                        <div className="row justify-content-center">
                            {places.map((data, i) => (
                                <div key={i} className="col-lg-3 col-md-4 col-sm-6 col-10">
                                    <div className="place-box mt-30">
                                        <div className="place-bg-wrap">
                                            <div className="place-bg" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + data.gridimg + ")" }} />
                                        </div>
                                        <div className="desc">
                                            <h4><Link to={"/places-details/" + data.id}>{data.title}</Link></h4>
                                            <span className="time">{data.time}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;