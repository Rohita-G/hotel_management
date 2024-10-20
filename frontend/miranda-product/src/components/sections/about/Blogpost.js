import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import blogs from '../../../data/blog.json';
import authors from '../../../data/authors.json';

class Blogpost extends Component {
    render() {
        return (
            <section className="latest-news pt-115 pb-115">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="title-tag">Blog</span>
                        <h2>News Feeds</h2>
                    </div>
                    {/* Latest post loop */}
                    <div className="row justify-content-center mt-50">
                        {blogs.slice(0, 3).map((item, i) => (
                            <div key={i} className="col-lg-4 col-sm-6">
                                <div className="latest-post-box mt-30">
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
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Blogpost;