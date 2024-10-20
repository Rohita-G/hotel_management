import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../layouts/Loader';
import classNames from 'classnames';
import rooms from '../../../data/room.json';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: rooms,
            currentPage: 1,
            itemsPerPage: 3,
            loading: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        var paginationContent = event.target.closest('.pagination-content');

        if (paginationContent) {
            paginationContent.scrollIntoView();
        }

        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                currentPage: Number(event.target.getAttribute('data-page')),
                loading: false
            });
        }, 2000);

    }
    render() {
        const { items, currentPage, itemsPerPage } = this.state;

        // Logic for displaying items
        const indexOfLastitem = currentPage * itemsPerPage;
        const indexOfFirstitem = indexOfLastitem - itemsPerPage;
        const currentitems = items.slice(indexOfFirstitem, indexOfLastitem);

        const renderitems = currentitems.map((item, i) => {
            return <div key={i} className="room-box mb-30">
                <div className="row no-gutters justify-content-center">
                    <div className="col-lg-5 col-md-10">
                        <div className="room-img-wrap">
                            <div className="room-img" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.listimage + ")" }} />
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-10">
                        <div className="room-desc">
                            <div className="row align-items-center">
                                <div className="col-sm-8">
                                    <ul className="icons">
                                        {item.amenities.slice(0, 7).map((item, i) => (
                                            <li key={i}><i className={item.icon} /></li>
                                        ))}
                                    </ul>
                                    <h4 className="title"><Link to={"/room-details/" + item.id}>{item.title}</Link></h4>
                                    <p>{item.text}</p>
                                </div>
                                <div className="col-sm-4">
                                    <div className="text-sm-center">
                                        <span className="price">${new Intl.NumberFormat().format(item.price)}<span>/{item.period}</span></span>
                                        <Link to={"/room-details/" + item.id} className="book-btn">Booking Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        });
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPagination = pageNumbers.map(number => {
            const activeCondition = this.state.currentPage === number ? 'active' : ''
            return (
                <Fragment key={number}>
                    {pageNumbers.length > 1 ? <li className={classNames({ "active": activeCondition })}>
                        <Link to="#" data-page={number} onClick={this.handleClick}>{number}</Link>
                    </li> : ''}
                </Fragment>
            );
        });
        return (
            <section className="room-section room-list-style pt-120 pb-120">
                <div className="container">
                    <div className="room-list-loop">
                        {/* Post Start */}
                        {this.state.loading === false ? renderitems : <Loader />}
                        {/* Post End */}
                    </div>
                    <div className="pagination-wrap">
                        {pageNumbers.length > 1 ?
                            <ul>
                                {/* Prev */}
                                {/* to show previous, we need to be on the 2nd or more page */}
                                {pageNumbers.length > 1 && this.state.currentPage !== 1 ?
                                    <li>
                                        <Link to="#" data-page={this.state.currentPage - 1} onClick={this.handleClick}>
                                            <i className="far fa-angle-double-left" />
                                        </Link>
                                    </li>
                                    : ''}
                                {/* Prev */}
                                {renderPagination}
                                {/* Next */}
                                {/* to show next, we should not be on the last page */}
                                {pageNumbers.length > 1 && this.state.currentPage !== pageNumbers.length ? <li>
                                    <Link to="#" data-page={parseInt(this.state.currentPage + 1)} onClick={this.handleClick}>
                                        <i className="far fa-angle-double-right" />
                                    </Link>
                                </li>
                                    : ''}
                                {/* Next */}
                            </ul> : ''}
                        {/* Pagination End */}
                    </div>
                </div>
            </section>

        );
    }
}

export default Content;