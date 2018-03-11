import React, { Component } from 'react';
import './Header.css';



// Header component background parallax scroll:
//  background-position-y = 0 -> -100px from
//  document scroll top y / 8


class Header extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="header">
                <div className="header-content">
                    <h3>Hello</h3>
                    <h2>I am Jack Tilly</h2>
                    <h4>Web Developer</h4>
                    <div className="social-icons">
                        <div className="icon">
                            <a href="https://twitter.com/jackfintan" target="_blank"><i className="fab fa-twitter"></i></a>
                        </div>
                        <div className="icon">
                            <a href="https://www.instagram.com/jftilly/" target="_blank"><i className="fab fa-instagram"></i></a>
                        </div>
                        <div className="icon">
                            <a href="https://www.linkedin.com/in/jackftilly" target="_blank"><i className="fab fa-linkedin"></i></a>
                        </div>
                        <div className="icon">
                            <a href="https://github.com/jf-t" target="_blank"><i className="fab fa-github"></i></a>
                        </div>
                        <div className="icon">
                            <a href="mailto:jackftilly@gmail.com" target="_blank"><i className="far fa-envelope"></i></a>
                        </div>
                    </div>

                    <div className="scroll-icon">
                        <a onClick={() => this.props.linkTo('about')}><i className="far fa-arrow-alt-circle-down"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
