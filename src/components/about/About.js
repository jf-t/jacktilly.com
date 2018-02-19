import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render () {
        return (
            <div className="about">
                <div className="about-title">
                    <h1>about me</h1>
                </div>

                <div className="about-content clearfix">
                    <div className="about-leftside">
                        <div className="img-cont">
                            <img src="http://localhost:3001/cloisters-me.jpg" />
                        </div>
                    </div>
                    <div className="about-rightside">
                        <h3>My Story</h3>
                        <div className="rightside-content">
                            <p>I was born in London England in 1996, and moved to the USA when I was 5 when my father took a job in Silicon Valley. I grew up right under the nose of the Oracle headquarters, and always felt a passion for getting into the software industry. I graduated from Carlmont High School in Belmont, California, and I went to pursue my love of competitive golf at Washington State University.</p>
                            <p>When I was cut from the WSU golf team in August 2014, in my first few weeks at college, I turned my attention towards Computer Science. I finished two years of college taking basic Computer Science classes when I made a decision to take a different route. I was referred to <a href="https://www.appacademy.io" target="_blank">App Academy</a> through a family friend, and after some research I decided to leave my degree at WSU for App Academy.</p>
                            <p>I graduated from App Academy in October 2016 and moved to New York City to pursue my web development career.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
