import React, { Component } from 'react';
import './Menu.css';


class Menu extends Component {
    render () {
        return (
            <div className="menu">
                <div className="menu-leftside">
                    <h2>JACK TILLY</h2>
                </div>
                <div className="menu-rightside">
                    <div className="menu-nav">
                        <div className="navigation-item">
                            <a onClick={() => this.linkTo('home')}>home</a>
                        </div>
                        <div className="navigation-item">
                            <a onClick={() => this.linkTo('about')}>about me</a>
                        </div>
                        <div className="navigation-item">
                            <a onClick={() => this.linkTo('experience')}>experience</a>
                        </div>
                        <div className="navigation-item">
                            <a onClick={() => this.linkTo('education')}>education</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;
