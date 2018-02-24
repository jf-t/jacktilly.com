import React, { Component } from 'react';


class Portfolio extends Component {
    render () {
        return (
            <div className="portfolio">
                <div className="portfolio-content">
                    <div className="portfolio-header">
                        <h1>portfolio</h1>
                    </div>

                    <div className="portfolio-list">
                        <div className="portfolio-item">
                            <div className="portfolio-item-header">
                                <h2>Finstagram</h2>
                            </div>

                            <div className="portfolio-item-body">
                                <p>
                                    Full-stack application built with Ruby on Rails, React, Redux, LESS, and PostgreSQL. This application was built as the final project to graduate App Academy, and we were given 2 full weeks to build the application. This app was taken off of heroku because it was constantly shutting my blog down because of the free dyno limit.
                                </p>
                            </div>
                        </div>

                        <div className="portfolio-item">
                            <div className="portfolio-item-header">
                                <h2>CodeRnr</h2>
                            </div>

                            <div className="portfolio-item-body">
                                <p>
                                    Code Editing web application designed as a way to view and run JavaScript snippets in a browser. Worked with a partner to practice Git and project management techniques.
                                </p>
                            </div>
                        </div>

                        <div className="portfolio-item">
                            <div className="portfolio-item-header">
                                <h2>This website</h2>
                            </div>

                            <div className="portfolio-item-body">
                                <p>
                                    I created and designed this website myself using React. The code is on my Github page here.
                                </p>
                            </div>
                        </div>

                        <div className="portfolio-item">
                            <div className="portfolio-item-header">
                                <h2>Aggregate intelligene</h2>
                            </div>

                            <div className="portfolio-item-body">
                                <p>
                                    Static HTML single page website
                                </p>
                            </div>
                        </div>

                        <div className="portfolio-item">
                            <div className="portfolio-item-header">
                                <h2>light of life trust</h2>
                            </div>

                            <div className="portfolio-item-body">
                                <p>

                                </p>
                            </div>
                        </div>

                        <div className="portfolio-item">
                            <div className="portfolio-item-header">
                                <h2>pattiwood productions</h2>
                            </div>

                            <div className="portfolio-item-body">
                                <p>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Portfolio;
