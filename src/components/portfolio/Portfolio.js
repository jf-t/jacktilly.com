import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
    render () {
        return (
            <div className="portfolio section">
                <div className="portfolio-content">
                    <div className="portfolio-header">
                        <h1>portfolio</h1>
                    </div>

                    <div className="portfolio-list">
                        <div className="portfolio-item">
                            <div className="portfolio-item-header">
                                <h2>Finstagram</h2>
                                <a target="_blank" href="https://github.com/jf-t/finstagram">See Source Code</a>
                            </div>

                            <div className="portfolio-item-body">
                                <p>
                                    Full-stack application built with Ruby on Rails, React, Redux, LESS, and PostgreSQL. This application was built as the final project to graduate App Academy, and we were given 2 full weeks to build the application.
                                </p>
                            </div>
                        </div>

                        <div className="portfolio-item">
                            <div className="portfolio-item-header">
                                <h2>CodeRnr</h2>
                                <a target="_blank" href="https://github.com/kpam92/codeRunr">See Source Code</a>
                            </div>

                            <div className="portfolio-item-body">
                                <p>
                                    Code Editing web application designed as a way to view and run JavaScript snippets in a browser. Worked with a partner to practice Git and project management techniques. Used Flask microframework for user support (save, edit, delete, auth).
                                </p>
                            </div>
                        </div>

                        <div className="portfolio-item">
                            <div className="portfolio-item-header">
                                <h2>This website</h2>
                            </div>

                            <div className="portfolio-item-body">
                                <p>
                                    Designed entire personal website myself, and implemented all designs in modern React components and SCSS.
                                </p>
                            </div>
                        </div>

                        <div className="portfolio-item">
                            <div className="portfolio-item-header">
                                <h2>Aggregate intelligene</h2>
                                <a target="_blank" href="http://www.aggregateintelligence.com/">Open Website</a>
                            </div>

                            <div className="portfolio-item-body">
                                <p>
                                    Static HTML single page website using animation affects in JavaScript for a start up. Designed along with CEO and implemented entirely in one work day.
                                </p>
                            </div>
                        </div>

                        <div className="portfolio-item">
                            <div className="portfolio-item-header">
                                <h2>light of life trust</h2>
                                <a target="_blank" href="http://www.lightoflifecharity.org/">Open Website</a>
                            </div>

                            <div className="portfolio-item-body">
                                <p>
                                    Designed and implemented basic website gratuitously for a branch of a large charity in my local area.
                                </p>
                            </div>
                        </div>

                        <div className="portfolio-item">
                            <div className="portfolio-item-header">
                                <h2>More Coming Soon!</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Portfolio;
