import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    constructor () {
        super();

        this.sendEmail = this.sendEmail.bind(this);
    }

    sendEmail (event) {
        event.preventDefault();
    }

    render () {
        return (
            <div className="contact section">
                <div className="contact-content">
                    <div className="contact-header">
                        <h1>contact</h1>
                    </div>

                    <div className="contact-info">
                        <div className="contact-form">
                            <div className="contact-cont contact-name">
                                <input id="name" type="text" placeholder="what's your name?" />
                            </div>
                            <div className="contact-cont contact-email">
                                <input id="name" type="text" placeholder="what's your email?" />
                            </div>
                            <div className="contact-cont contact-body">
                                <textarea placeholder="what can i do for you?"></textarea>
                            </div>

                            <button onClick={this.sendEmail}>Send Message!</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
