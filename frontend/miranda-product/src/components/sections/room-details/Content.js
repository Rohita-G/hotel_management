import React from 'react';
import { Link } from 'react-router-dom';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { getRoom } from '../../../helper/Roomhelper';
import Sidebar from "../../layouts/Roomsidebar";
import roomcategory from '../../../data/roomcategory.json'
import rooms from '../../../data/room.json'
import authors from '../../../data/authors.json'

function Content(props) {
    const roomId = props.roomId;
    const item = getRoom(roomId);
    return (
        <section className="room-details pt-120 pb-90">
            <div className="container">
                <div className="row">
                    {/* details */}
                    <div className="col-lg-8">
                        <div className="deatils-box">
                            <div className="title-wrap">
                                <div className="title">
                                    {item.category.slice(0, 1).map((category) => (
                                        roomcategory.filter(item => {
                                            return item.id === category
                                        }).map((category, i) => (
                                            <div key={i} className="room-cat">
                                                {category.title}
                                            </div>
                                        ))
                                    ))}
                                    <h2>{item.title}</h2>
                                </div>
                                <div className="price">
                                    ${new Intl.NumberFormat().format(item.price)}<span>/{item.period}</span>
                                </div>
                            </div>
                            <div className="thumb">
                                <img src={process.env.PUBLIC_URL + "/" + item.sliderimage} className="w-100" alt={item.title} />
                            </div>
                            <div className="room-fearures clearfix mt-60 mb-60">
                                <h3 className="subtitle">Amenities</h3>
                                <ul className="room-fearures-list">
                                    {item.amenities.map((item, i) => (
                                        <li key={i}><i className={item.icon} />{item.title}</li>
                                    ))}
                                </ul>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: item.longdesc }} />
                            <div className="testimonials mt-60 mb-20">
                                <div className="row">
                                    {item.authors.slice(0, 2).map((author) => (
                                        authors.filter(item => {
                                            return item.id === author
                                        }).map((author, i) => (
                                            <div key={i} className="col-lg-6 col-sm-6">
                                                <div className="testimonial-box">
                                                    <div className="client-img">
                                                        <img src={process.env.PUBLIC_URL + "/" + author.img} alt={author.name} />
                                                        <span className="check"><i className="fal fa-check" /></span>
                                                    </div>
                                                    <h3>{author.name}</h3>
                                                    <span className="clinet-post">{author.designation}</span>
                                                    <p>{author.shotdesc}</p>
                                                </div>
                                            </div>
                                        ))
                                    ))}
                                </div>
                            </div>
                            <div className="room-rules clearfix mb-60">
                                <h3 className="subtitle">House Rules</h3>
                                <ul className="room-rules-list">
                                    {item.rules.map((text, i) => (
                                        <li key={i}>{text}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="cancellation-box clearfix mb-60">
                                <h3 className="subtitle">Cancellation</h3>
                                <p dangerouslySetInnerHTML={{ __html: item.cancellation }} />
                            </div>
                            <div className="room-map mb-60 position-relative" id="roomMap">
                                <Map
                                    google={props.google}
                                    zoom={12}
                                    initialCenter={item.location}
                                >
                                    <Marker position={item.location} />
                                </Map>
                            </div>
                            <div className="related-room">
                                <h3 className="subtitle">Related Rooms</h3>
                                <div className="row room-gird-loop">
                                    {rooms.filter(post => { return parseInt(post.id) !== parseInt(roomId) && post.category.some(r => item.category.includes(r)) }).slice(0, 2).map((data, i) => (
                                        <div key={i} className="col-lg-6 col-sm-6">
                                            <div className="room-box mb-30">
                                                <div className="room-img-wrap">
                                                    <div className="room-img" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + data.gridimage + ")" }} />
                                                </div>
                                                <div className="room-desc">
                                                    <ul className="icons">
                                                        {data.amenities.slice(0, 7).map((data, i) => (
                                                            <li key={i}><i className={data.icon} /></li>
                                                        ))}
                                                    </ul>
                                                    <h4 className="title"><Link to={"/room-details/" + data.id}>{data.title}</Link></h4>
                                                    <p>{data.text.slice(0, 75)}...</p>
                                                    <span className="price">${new Intl.NumberFormat().format(data.price)}/{data.period}</span>
                                                    <Link to={"/room-details/" + data.id} className="book-btn">Booking Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* form */}
                    <div className="col-lg-4">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDC3Ip9iVC0nIxC6V14CKLQ1HZNF_65qEQ",
})(Content);