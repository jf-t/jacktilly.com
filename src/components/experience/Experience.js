import React, { Component } from 'react';
import './Experience.css';

class Experience extends Component {
    render () {
        return (
            <div className="experience">
                <div className="experience-content">
                    <div className="experience-header">
                        <h1>experience</h1>
                    </div>

                    <div className="experience-list">
                        <div className="experience-item">
                            <div className="experience-item-content">
                                <div className="experience-item-header">
                                    <h3>Guidepoint</h3>
                                    <h4>Frontend Developer</h4>
                                    <h5>Jan 2017 - Present</h5>
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
                                        and Joomla CMS constantly. Worked
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
