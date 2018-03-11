import React, { Component } from 'react';

import './Menu.css';


class Menu extends Component {
    constructor (props) {
        super(props);

        this.linkTo = this.linkTo.bind(this);
    }

    linkTo (route) {
        this.props.linkTo(route);
    }


    render () {
        return (
            <div className="menu section" id="menu">
                <div className="menu-content">
                    <div className="menu-leftside">
                        <a onClick={() => this.linkTo('header')}>
                            <h2>JACK TILLY</h2>
                        </a>
                    </div>
                    <div className="menu-rightside">
                        <div className="menu-nav">
                            <div className="navigation-item">
                                <a onClick={() => this.linkTo('about')}>about me</a>
                            </div>
                            <div className="navigation-item">
                                <a onClick={() => this.linkTo('experience')}>experience</a>
                            </div>
                            <div className="navigation-item">
                                <a onClick={() => this.linkTo('portfolio')}>portfolio</a>
                            </div>
                            <div className="navigation-item">
                                <a onClick={() => this.linkTo('contact')}>contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;
