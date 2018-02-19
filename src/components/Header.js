import React, { Component } from 'react';
import './Header.css';



class Header extends Component {
    render () {
        return (
            <div className="header">
                <div className="header-content">
                    <h3>Hello</h3>
                    <h2>I am Jack Tilly</h2>
                    <h4>Web Application Developer</h4>
                    <div className="social-icons">
                        <div className="icon">
                            <i class="fab fa-twitter"></i>
                        </div>
                        <div className="icon">
                            <i class="fab fa-instagram"></i>
                        </div>
                        <div className="icon">
                            <i class="fab fa-linkedin"></i>
                        </div>
                        <div className="icon">
                            <i class="fab fa-github"></i>
                        </div>
                        <div className="icon">
                            <i class="far fa-envelope"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
