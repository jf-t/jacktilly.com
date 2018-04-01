import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';

import smoothScroll from 'smoothscroll';

import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import About from './components/about/About';

import Portfolio from './components/portfolio/Portfolio';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';

class App extends Component {
    constructor () {
        super();

        this.linkTo = this.linkTo.bind(this);
    }

    linkTo (route) {
        let tesNode = ReactDOM.findDOMNode(this.refs[route]).offsetTop;

        tesNode -= 140;
        tesNode += (Math.max(document.documentElement.clientHeight, window.innerHeight || 0));

        smoothScroll(tesNode);
    }

    render() {
        return (
            <div className="App">
                <div className="header-container">
                    <Header linkTo={this.linkTo} ref="header" />
                </div>
                <div className="body">
                    <Menu linkTo={this.linkTo} ref="menu" />
                    <About ref="about"/>
                    <Experience ref="experience" />
                    <Portfolio ref="portfolio" />
                    <Contact ref="contact" />
                </div>
            </div>
        );
    }
}

export default App;
