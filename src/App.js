import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import About from './components/about/About';

import Portfolio from './components/portfolio/Portfolio';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="header-container">
                    <Header />
                </div>
                <div className="body">
                    <Menu />
                    <About />
                    <Experience />
                    <Portfolio />
                    <Contact />
                </div>
            </div>
        );
    }
}

export default App;
