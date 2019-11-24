import React, { Component } from 'react';
import './Experience.css';

class Experience extends Component {
    render () {
        return (
            <div className="experience section">
                <div className="experience-content">
                    <div className="experience-header">
                        <h1>experience</h1>
                    </div>

                    <div className="experience-list">
                        <div className="experience-item">
                            <div className="experience-item-content">
                                <div className="experience-item-header">
                                    <h3>Ladders</h3>
                                    <h4>Software Developer</h4>
                                    <h5>July 2018 - Present</h5>
                                </div>
                                <div className="experience-item-body">
                                    <p>
                                        Started as a front-end engineer and transitioned
                                        into more of a full-stack role. Hired to work
                                        on a Re-frame application written in ClojureScript,
                                        but then switched to being a core engineer on
                                        a port of the entire site, in React/Redux with Next.js
                                        server-side rendering.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="experience-item">
                            <div className="experience-item-content">
                                <div className="experience-item-header">
                                    <h3>Guidepoint</h3>
                                    <h4>Frontend Developer</h4>
                                    <h5>January 2017 - June 2018</h5>
                                </div>
                                <div className="experience-item-body">
                                    <p>
                                        Frontend developer for large corporation
                                        in New York City. Main responsibilities
                                        include working on new features for
                                        Angular 4 application, creating varius
                                        React components, and maintaining a
                                        legacy CRM application.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="experience-item">
                            <div className="experience-item-content">
                                <div className="experience-item-header">
                                    <h3>365 Media</h3>
                                    <h4>UI Developer</h4>
                                    <h5>May 2015 - July 2016</h5>
                                </div>
                                <div className="experience-item-body">
                                    <p>
                                        Built corporate websites for growing
                                        company in Silicon Valley, using
                                        responsive bootstrap grids, LESS styling,
                                        and Joomla CMS. Directly worked
                                        with an experienced designer for developing,
                                        testing and designing the websites.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;
