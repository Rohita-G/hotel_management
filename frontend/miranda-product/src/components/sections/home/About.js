import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import category from '../../../data/category.json';

class About extends Component {
    render() {
        return (
            <section className="about-section pt-115 pb-115">
                <div className="container">
                    <div className="down-arrow-wrap text-center">
                        <Link to="#" className="down-arrow"><i className="fal fa-arrow-down" /></Link>
                    </div>
                    <div className="section-title about-title text-center mb-20">
                        <span className="title-tag">since <span>1994</span></span>
                        <h2>Situated In Prime Position At The Foot Of The Slopes Of Courchevel Moriond.</h2>
                    </div>
                    <ul className="about-features masonry-layout">
                        {category.slice(0, 5).map((item, i) => (
                            <li key={i}>
                                <Link to="#">
                                    <i className={item.icon} />
                                    <i className={"hover-icon " + item.icon} />
                                    <span className="title">{item.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        );
    }
}

export default About;