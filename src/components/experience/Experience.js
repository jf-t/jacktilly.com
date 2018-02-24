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
                                    <h4>Responsibilities include:</h4>
                                    <ul>
                                        <li>Develop new features on Angular 4 application</li>
                                        <li>Maintain legacy CRM with Symfony 4 (php)</li>
                                        <li>Learned and built out most of an internal iOS application</li>
                                        <li>Used Quality Assurance techniques using JIRA, BitBucket and Confluence with a designated QA test team.</li>
                                        <li>Gained promotion after 6 months on the job (August 2017)</li>
                                    </ul>
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
                                    <h4>Responsibilities include:</h4>
                                    <ul>
                                        <li>Built professionally designed responsive websites for a growing corporation</li>
                                        <li>Used modern HTML5/CSS3 practices in a professionally setting in Silicon Valley</li>
                                        <li>Worked directly with experienced designer in development, testing, and maintenance</li>
                                    </ul>
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
