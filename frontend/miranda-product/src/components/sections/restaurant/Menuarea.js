import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import menublock from '../../../data/menu.json';

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
        return (
            <section className="menu-area gradient-white pt-115 pb-115">
                <div className="container">
                    {/* Section Title */}
                    <div className="section-title text-center mb-80">
                        <span className="title-tag">available</span>
                        <h2>Treanding Menu</h2>
                    </div>
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
                </div>
            </section>
        );
    }
}

export default Menuarea;