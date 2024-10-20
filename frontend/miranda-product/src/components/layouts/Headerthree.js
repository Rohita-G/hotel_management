import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from '../../helper/Navhelp';
import classNames from 'classnames';
import navigationmenu from '../../data/navigation.json';
import Canvas from './Canvas';

class Headerthree extends HeaderComponent {
    render() {
        const breakpoint = this.state.isMobile ? 'breakpoint-on' : '';
        const hideClass = this.state.isMobile ? 'd-none' : '';
        const stickyHeader = this.state.isTop ? 'sticky-active' : '';
        return (
            <Fragment>
                {/*====== HEADER START ======*/}
                <header className="header-three">
                    <div className="header-top">
                        <div className="container container-custom-three">
                            <div className="d-md-flex align-items-center justify-content-between">
                                <p className="welcome-text">We Make You Feel Comfortable</p>
                                <ul className="header-top-info">
                                    <li>
                                        <i className="fal fa-Clock"> </i>
            Mon - Sat 9.00 - 18.00
          </li>
                                    <li>
                                        <i className="fal fa-Clock"> </i>
            Mon - Sat 9.00 - 18.00
          </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`main-menu-area sticky-header ${stickyHeader}`}>
                        <div className="container container-custom-three">
                            <div className={`nav-container d-flex align-items-center justify-content-between ${breakpoint}`}>
                                {/* Site Logo */}
                                <div className="site-logo">
                                    <Link to="/"><img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="logo" /></Link>
                                </div>
                                {/* Main Menu */}
                                <div className={classNames("nav-menu d-lg-flex align-items-center justify-content-between", { "menu-on": this.state.navmethod })}>
                                    {/* Navbar Close Icon */}
                                    <div className="navbar-close" onClick={this.toggleNav}>
                                        <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                                    </div>
                                    {/* Mneu Items */}
                                    <div className="menu-items">
                                        <ul>
                                            {navigationmenu.length > 0 ? navigationmenu.map((item, i) => (
                                                <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                                                    {item.child ? <Link onClick={e => e.preventDefault()} to="/"> {item.linkText} </Link> : <Link to={item.link}> {item.linkText} </Link>}
                                                    {item.child ?
                                                        <ul className="submenu" role="menu">
                                                            {item.submenu.map((sub_item, i) => (
                                                                <li key={i} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                                                    {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
                                                                    {sub_item.submenu ?
                                                                        <ul className="submenu">
                                                                            {sub_item.submenu.map((third_item, i) => (
                                                                                <li className="menu-item" key={i}><Link
                                                                                    to={third_item.link}>{third_item.linkText}</Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul> : null}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        : null
                                                    }
                                                </li>
                                            )) : null}
                                        </ul>
                                    </div>
                                </div>
                                {/* navbar right content */}
                                <div className="menu-right-buttons">
                                    {/* Log in icon */}
                                    <div className="login-btn">
                                        <Link to="#" id="loginBtn"><i className="fal fa-user" /></Link>
                                    </div>
                                    {/* search btton */}
                                    <div className="search">
                                        <Link to="#" className={classNames("search-icon", { "active": this.state.searchmethod })} id="searchBtn" onClick={this.searchToggle}>
                                            <i className="fal fa-search open-icon" />
                                            <i className="fal fa-times close-icon" />
                                        </Link>
                                        <div className={classNames("search-form", { "d-block": this.state.searchmethod })}>
                                            <form action="#">
                                                <input type="text" placeholder="Search your keyword..." />
                                                <button type="submit"><i className="far fa-search" /></button>
                                            </form>
                                        </div>
                                    </div>
                                    {/* Off canvas Toggle */}
                                    <div className="toggle" onClick={this.canvasToggle}>
                                        <Link to="#" id="offCanvasBtn"><i className="fal fa-bars" /></Link>
                                    </div>
                                    {/* Navbar Toggler */}
                                    <div className={classNames("navbar-toggler", { "active": this.state.navmethod })} onClick={this.toggleNav}>
                                        <span /><span /><span />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/*====== HEADER END ======*/}
                {/*====== OFF CANVAS START ======*/}
                <div className={classNames("offcanvas-wrapper", { "show-offcanvas": this.state.canvasmethod })}>
                    <div className={classNames("offcanvas-overly", { "show-overly": this.state.canvasmethod })} onClick={this.canvasToggle} />
                    <div className="offcanvas-widget">
                        <Link to="#" className="offcanvas-close" onClick={this.canvasToggle}><i className="fal fa-times" /></Link>
                        <Canvas />
                    </div>
                </div>
                {/*====== OFF CANVAS END ======*/}
            </Fragment>
        );
    }
}

export default Headerthree;