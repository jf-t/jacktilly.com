import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render () {
        return (
            <div className="about section">
                <div className="about-story">
                    <div className="about-title">
                        <h1>about me</h1>
                    </div>

                    <div className="about-content clearfix">
                        <div className="about-leftside">
                            <div className="img-cont">
                                <img src="http://i64.tinypic.com/nl38zr.jpg" />
                            </div>
                        </div>
                        <div className="about-rightside">
                            <h3>My Story</h3>
                            <div className="rightside-content">
                                <p>I was born in London, England, and moved to the US when I was 5 when my father took a job in Silicon Valley. I grew up under the nose of the Oracle headquarters, and growing up I always felt a passion for software. I spent my teenage years working on my golf game, which I played competitively throughout high school. I took my passion to Washington State University, to try out for their D1 collegiate golf team. </p>
                                <p>When I was cut from the WSU golf team, in my first few weeks at college, I turned my attention towards my computer science major. After my first year at WSU, my father was looking for somebody to build his corporate websites, so I taught myself HTML/CSS and took the job. I spent the next year taking local community college classes and working for my father. After my second year at college, I decided to take a major career decision.</p>
                                <p>One of my family friends mentioned a "coding bootcamp," and after some research, I found <a href="https://www.appacademy.io" target="_blank">App Academy</a>. I graduated from App Academy in October 2016 and moved to New York City to pursue my web development career.</p>
                            </div>
                            <div className="download-links">
                                <a href="/resume2.pdf" download>
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-info clearfix">
                    <div className="my-info">
                        <h3>Personal Info</h3>
                        <div className="info-table">
                            <div className="row clearfix">
                                <span className="row-key">Full Name:</span>
                                <span className="row-value">Jack Fintan Tilly</span>
                            </div>
                            <div className="row clearfix">
                                <span className="row-key">Birth Date:</span>
                                <span className="row-value">September 4th</span>
                            </div>
                            <div className="row clearfix">
                                <span className="row-key">Birth Place:</span>
                                <span className="row-value">London, UK.</span>
                            </div>
                            <div className="row clearfix">
                                <span className="row-key">Home Town:</span>
                                <span className="row-value">Belmont, CA.</span>
                            </div>
                            <div className="row clearfix">
                                <span className="row-key">Location:</span>
                                <span className="row-value">Brooklyn, NY</span>
                            </div>
                            <div className="row clearfix">
                                <span className="row-key">Email:</span>
                                <span className="row-value">jackftilly@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="my-skills">
                        <h3>Development Skills</h3>

                        <div className="skills-table">
                            <div className="row clearfix">
                                <span className="row-value">JavaScript</span>
                            </div>
                            <div className="row clearfix">
                                <span className="row-value">Angular 2+</span>
                            </div>
                            <div className="row clearfix">
                                <span className="row-value">React/Redux</span>
                            </div>
                            <div className="row clearfix">
                                <span className="row-value">HTML5/CSS3</span>
                            </div>
                            <div className="row clearfix">
                                <span className="row-value">API (Python, Ruby, Node)</span>
                            </div>
                            <div className="row clearfix">
                                <span className="row-value">SQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
