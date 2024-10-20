import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import productcategory from '../../../data/category.json'
import products from '../../../data/restaurant.json'
import Masonry from 'react-masonry-component';

class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredProducts: products,
            activeItem: 1
        };
    }
    handleClick = id => {
        let filteredProducts = [];
        if (id === -1) {
            filteredProducts = products;
        } else {
            filteredProducts = products.filter(
                (product) => product.category.includes(id)
            );
        }
        this.setState({ filteredProducts, activeItem: id });
    };
    render() {
        const imagesLoadedOptions = {
            itemSelector: '.masonry-item',
            percentPosition: true,
            resize: true,
            fitWidth: true
        };
        const renderAll = this.state.filteredProducts.map((item, i) => (
            <div key={i} className="col-lg-3 col-6 masonry-item">
                <div className="food-box">
                    <div className="thumb">
                        <img src={process.env.PUBLIC_URL + "/" + item.img} alt="" />
                        <span className="price">${new Intl.NumberFormat().format((item.price).toFixed(2))}</span>
                    </div>
                    <div className="desc">
                        {item.category.slice(0,1).map((category) => (
                            productcategory.filter(item => {
                                return item.id === category
                            }).map((cat, i) => (
                                <Link key={i} to="#" className="cat">{cat.title}</Link>
                            ))
                        ))}
                        <h4>{item.title}</h4>
                        <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                    </div>
                </div>
            </div>
        ));
        return (
            <section className="restaurant-tab-area pt-120 pb-90">
                <div className="container">
                    <ul className="restaurant-rood-list row justify-content-center nav nav-pills mb-30" id="restaurant-tab" role="tablist">
                        {productcategory.map((item) => (
                            <li className="nav-item col-lg-2 col-md-3 col-sm-4 col-6">
                                <Link key={item.id} className={this.state.activeItem === parseInt(item.id) ? 'nav-link active' : 'nav-link'} onClick={this.handleClick.bind(this, item.id)}>
                                    <i className={item.icon} />
                                    <span className="title">{item.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Masonry className="row" imagesLoadedOptions={imagesLoadedOptions}>
                        {renderAll}
                    </Masonry>
                </div>
            </section>
        );
    }
}

export default Restaurant;