import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../layouts/Loader';
import classNames from 'classnames';
import blogpost from '../../../data/blog.json';
import authors from '../../../data/authors.json';
import { getFilteredPosts } from '../../../helper/Bloghelper';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.getPosts(),
            currentPage: 1,
            itemsPerPage: 6,
            loading: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    getPosts() {
        var cat = this.props.catId ? this.props.catId : '';
        var tag = this.props.tagId ? this.props.tagId : '';
        var author = this.props.userId ? this.props.userId : '';
        var filteredItems = getFilteredPosts(blogpost, cat = { cat, tag, author });
        return filteredItems;
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
            return <div key={i} className="col-lg-4">
                <div className="latest-post-box mb-40">
                    <div className="post-img" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.gridimg + ")" }} />
                    <div className="post-desc">
                        <ul className="post-meta">
                            <li>
                                <Link to={"/blog-details/" + item.id}><i className="fal fa-calendar-alt" />{item.postdate}</Link>
                            </li>
                            {item.author.map((author) => (
                                authors.filter(item => {
                                    return item.id === author
                                }).map((author, i) => (
                                    <li key={i}><Link to={"/blog/user/" + author.id}><i className="fal fa-user" />By {author.name}</Link></li>
                                ))
                            ))}
                        </ul>
                        <h4><Link to={"/blog-details/" + item.id}>{item.title}</Link></h4>
                        <p>
                            {item.shortdesc.slice(0, 100)}
                        </p>
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
            <section className="latest-news pt-120 pb-120 pagination-content">
                <div className="container">
                    <div className="row justify-content-center room-gird-loop">
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