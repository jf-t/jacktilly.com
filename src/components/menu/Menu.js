import React, { Component } from 'react';
import './Menu.css';


class Menu extends Component {
    constructor () {
        super();

        this.linkTo = this.linkTo.bind(this);
    }

    linkTo (route) {
        // Need to implement single page site routing
    }


    render () {
        return (
            <div className="menu">
                <div className="menu-leftside">
                    <h2>JACK TILLY</h2>
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
        )
    }
}

export default Menu;
