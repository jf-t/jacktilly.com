import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import About from './components/about/About';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Menu />
                <About />
            </div>
        );
    }
}

export default App;
