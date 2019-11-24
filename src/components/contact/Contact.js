import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render () {
        return (
            <div className="contact section">
                <div className="contact-content">
                    <div className="contact-header">
                        <h1>contact</h1>
                    </div>

                    <div className="contact-info">
                        <p>Email: <a target="_blank" href="mailto:jackftilly@gmail.com">jackftilly@gmail.com</a></p>
                        <p>Phone: <a target="_blank" href="tel:6508635415">(650) 863-5415</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
