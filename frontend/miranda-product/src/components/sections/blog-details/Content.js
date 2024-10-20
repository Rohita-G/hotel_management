import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { getBlog } from '../../../helper/Bloghelper';
import { postnavigation } from '../../../helper/helper';
import Sidebar from '../../layouts/Blogsidebar';
import authors from '../../../data/authors.json';
import blogpost from '../../../data/blog.json';
import blogcategory from '../../../data/blogcategory.json';
import blogtags from '../../../data/blogtags.json';

class Content extends Component {
    render() {
        const blogId = this.props.blogId;
        const item = getBlog(blogId);
        return (
            <section className="blog-section pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="news-details-box">
                                <div className="entry-content">
                                    {item.categories.map((category) => (
                                        blogcategory.filter(item => {
                                            return item.id === category
                                        }).map((cat, i) => (
                                            <Link key={i} to={"/blog/cat/" + cat.id} className="cat">{cat.title}</Link>
                                        ))
                                    ))}
                                    <h2 className="title">{item.title}</h2>
                                    <ul className="post-meta">
                                        {item.author.map((user) => (
                                            authors.filter(item => {
                                                return item.id === user
                                            }).map((name, i) => (
                                                <li key={i}><Link to={"/blog/user/" + name.id}><i className="far fa-user" />by {name.name}</Link></li>
                                            ))
                                        ))}

                                        {
                                            item.reviews > 0 || item.reviews !== '' ? <li><Link to="#"><i className="far fa-comments" />{item.reviews.length} Comments</Link></li> : ''
                                        }
                                        <li><Link to="#"><i className="far fa-calendar-alt" />{item.postdate}</Link></li>
                                    </ul>
                                    <div dangerouslySetInnerHTML={{ __html: item.longdescription }}></div>
                                </div>
                                <div className="entry-footer">
                                    <div className="tag-and-share mt-50 mb-50 d-md-flex align-items-center justify-content-between">
                                        <div className="tag">
                                            <h5>Related Tags</h5>
                                            <ul>
                                                {item.tags.map((tag) => (
                                                    blogtags.filter(item => {
                                                        return item.id === tag
                                                    }).map((tags, i) => (
                                                        <li key={i}><Link to={"/blog/tag/" + tags.id}>{tags.title}</Link></li>
                                                    ))
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="share text-md-right">
                                            <h5>Social Share</h5>
                                            <ul>
                                                {item.social.map((icon, i) => (
                                                    <li key={i}><a rel={'external'} href={icon.url}><i className={icon.icon} /></a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="post-nav d-md-flex align-items-center justify-content-between">

                                        {postnavigation(blogpost, blogpost.findIndex(item => parseInt(item.id) === parseInt(blogId)))}
                                    </div>
                                    <div className="related-post mt-50">
                                        <h3 className="mb-30">Related Post</h3>
                                        <div className="row">
                                            {blogpost.filter(post => { return parseInt(post.id) !== parseInt(blogId) && post.categories.some(r => item.categories.includes(r)) }).slice(0, 2).map((data, i) => (
                                                <div key={i} className="col-md-6">
                                                    <div className="related-post-box mb-50">
                                                        <div className="thumb" style={{ backgroundImage: "url("+process.env.PUBLIC_URL+"/"+data.gridimg+")" }}>
                                                        </div>
                                                        <div className="desc">
                                                            <Link to={"/blog-details/" + data.id} className="date"><i className="far fa-calendar-alt" />{data.postdate}</Link>
                                                            <h4><Link to={"/blog-details/" + data.id}>{item.title}</Link></h4>
                                                            <p>{item.shortdesc.slice(0,100)}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {item.author.map((user) => (
                                        authors.filter(item => {
                                            return item.id === user
                                        }).map((name, i) => (
                                            <div key={i} className="author-info-box mb-45">
                                                <div className="author-img">
                                                    <img src={process.env.PUBLIC_URL + "/" + name.img} alt={name.name} />
                                                </div>
                                                <div className="info-text">
                                                    <span>Written by</span>
                                                    <h3>{name.name}</h3>
                                                    <p>{name.longdescription}</p>
                                                </div>
                                            </div>
                                        ))
                                    ))}
                                </div>
                                <div className="comment-template">
                                    <h3 className="box-title">{item.reviews.length} Comments</h3>
                                    <ul className="comments-list mb-40">
                                        {item.reviews.map((review, i) => (
                                            <li key={i}>
                                                <div className="comment-img">
                                                    <img src={process.env.PUBLIC_URL + "/" + review.img} alt={review.name} />
                                                </div>
                                                <div className="comment-desc">
                                                    <div className="desc-top">
                                                        <h6>{review.name}</h6>
                                                        <span className="date">{review.date}</span>
                                                        <Link to="#" className="reply-link"><i className="far fa-reply" />Reply</Link>
                                                    </div>
                                                    <p>{review.comment}</p>
                                                </div>
                                                <ul className="children">
                                                    {review.replies.map((reply, i) => (
                                                        <li key={i}>
                                                            <div className="comment-img">
                                                                <img src={process.env.PUBLIC_URL + "/" + reply.img} alt={reply.name} />
                                                            </div>
                                                            <div className="comment-desc">
                                                                <div className="desc-top">
                                                                    <h6>{reply.name}</h6>
                                                                    <span className="date">{reply.date}</span>
                                                                    <Link to="#" className="reply-link"><i className="far fa-reply" />Reply</Link>
                                                                </div>
                                                                <p>{reply.comment}</p>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                    <h3 className="box-title">Post Comment</h3>
                                    <div className="comment-form">
                                        <form action="#">
                                            <div className="input-group input-group-two textarea mb-20">
                                                <textarea placeholder="Type your comments...." />
                                                <div className="icon"><i className="fas fa-pen" /></div>
                                            </div>
                                            <div className="input-group input-group-two mb-20">
                                                <input type="text" placeholder="Type your Name...." />
                                                <div className="icon"><i className="fas fa-user" /></div>
                                            </div>
                                            <div className="input-group input-group-two mb-20">
                                                <input type="email" placeholder="Type your email...." />
                                                <div className="icon"><i className="fas fa-envelope" /></div>
                                            </div>
                                            <div className="input-group input-group-two mb-20">
                                                <input type="url" placeholder="Type your Website...." />
                                                <div className="icon"><i className="fas fa-globe" /></div>
                                            </div>
                                            <div className="input-group  mt-30">
                                                <button type="submit" className="main-btn btn-filled"><i className="far fa-comments" /> Post Comment</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Blog Sidebar */}
                        <div className="col-lg-4 col-md-8 col-sm-10">
                            <div className="sidebar">
                                {/* About Author Widget */}
                                {item.author.map((user) => (
                                    authors.filter(item => {
                                        return item.id === user
                                    }).map((author, i) => (
                                        <div key={i} className="widget about-author-widget mb-40">
                                            <h5 className="widget-title">About Me</h5>
                                            <div className="author-box">
                                                <img src={process.env.PUBLIC_URL + "/" + author.img} alt={author.name} />
                                                <h6>{author.name}</h6>
                                                <p>{author.shotdesc}</p>
                                                <ul className="social-icon">
                                                    {author.social.map((icon, i) => (
                                                        <li key={i}><a rel={'external'} href={icon.url}><i className={icon.icon} /></a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))
                                ))}
                            </div>
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;