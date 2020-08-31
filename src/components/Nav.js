import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div>
                <header id="site_header" className="header mobile-menu-hide sticked">
                    <div className="header-content clearfix">
                        <div className="site-title-block mobile-hidden">
                            <a href="/">
                                <h1 className="site-title">Mạnh<span> Công</span></h1>
                            </a>
                        </div>
                        {/* Navigation */}
                        <div className="site-nav">
                            {/* Main menu */}
                            <ul id="nav" className="site-main-menu site-auto-menu">
                                <li >
                                    <Link to="index" className="pt-trigger">Home</Link>
                                </li>
                                <li>
                                    <Link to="resume" className="pt-trigger">Resume</Link>
                                </li>
                                <li>
                                    <Link to="gallery" className="pt-trigger">Gallery</Link>
                                </li>

                            </ul>
                            {/* /Main menu */}
                        </div>
                        {/* Navigation */}
                    </div>
                </header>
                {/* /Header */}
                {/* Mobile Header */}
                <div className="mobile-header mobile-visible">
                    <div className="mobile-logo-container">
                        <div className="mobile-site-title">
                            Công Mạnh </div>
                    </div>
                    <div className="menu-toggle mobile-visible">
                        <i id="openMenuRes" className="fa fa-bars" />
                    </div>
                </div>
            </div>

        );
    }
}

export default Nav;