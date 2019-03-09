import React, { Component } from 'react';
import Experience from './Experience.js'

import './Experiences.css';
import "typeface-karla";

class Experiences extends Component {
    render() {
        return (
            <div className="Experiences">
                <h1>
                    my Experiences...
                </h1>
                <Experience />
                <Experience />
            </div>
        );
    }
}

export default Experiences;