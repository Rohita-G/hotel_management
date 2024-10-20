import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../layouts/Loader';
import classNames from 'classnames';
import blogpost from '../../../data/blog.json';
import authors from '../../../data/authors.json';
import blogcategory from '../../../data/blogcategory.json';
import Sidebar from '../../layouts/Blogsidebar';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: blogpost,
            currentPage: 1,
            itemsPerPage: 4,
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
            return <div key={i} className="post-box mb-40">
                <div className="post-media">
                    <img src={process.env.PUBLIC_URL + "/" + item.listimg} alt={item.title} />
                </div>
                <div className="post-desc">
                    {item.categories.map((category) => (
                        blogcategory.filter(item => {
                            return item.id === category
                        }).map((cat, i) => (
                            <Link key={i} to={"/blog/cat/" + cat.id} className="cat">{cat.title}</Link>
                        ))
                    ))}
                    <h2>
                        <Link to={"/blog-details/" + item.id}>{item.title}</Link>
                    </h2>
                    <ul className="post-meta">
                        {
                            item.views > 0 || item.views !== '' ? <li><Link to="#"><i className="far fa-eye" />{item.views} Views</Link></li> : ''
                        }
                        {
                            item.reviews > 0 || item.reviews !== '' ? <li><Link to="#"><i className="far fa-comments" />{item.reviews.length} Comments</Link></li> : ''
                        }
                        <li><Link to="#"><i className="far fa-calendar-alt" />{item.postdate}</Link></li>
                    </ul>
                    <p>{item.shortdesc}</p>
                    <div className="post-footer">
                        {item.author.map((author) => (
                            authors.filter(item => {
                                return item.id === author
                            }).map((author, i) => (
                                <div key={i} className="author">
                                    <Link to={"/blog/user/" + author.id}>
                                        <img src={process.env.PUBLIC_URL + "/" + author.img} alt={author.name} /> by {author.name}
                                    </Link>
                                </div>
                            ))
                        ))}
                        <div className="read-more">
                            <Link to={"/blog-details/" + item.id}><i className="far fa-arrow-right" />Read More</Link>
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
            <section className="blog-section pt-120 pb-120 pagination-content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10">
                            <div className="blog-loop">
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
                        {/* Blog Sidebar */}
                        <div className="col-lg-4 col-md-8 col-sm-10">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Content;