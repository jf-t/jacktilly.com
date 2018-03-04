import React, { Component } from 'react';
import './Header.css';



// Header component background parallax scroll:
//  background-position-y = 0 -> -100px from
//  document scroll top y / 8


class Header extends Component {
    render () {
        return (
            <div className="header">
                <div className="header-content">
                    <h3>Hello</h3>
                    <h2>I am Jack Tilly</h2>
                    <h4>Web Developer</h4>
                    <div className="social-icons">
                        <div className="icon">
                            <i className="fab fa-twitter"></i>
                        </div>
                        <div className="icon">
                            <i className="fab fa-instagram"></i>
                        </div>
                        <div className="icon">
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <div className="icon">
                            <i className="fab fa-github"></i>
                        </div>
                        <div className="icon">
                            <i className="far fa-envelope"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
