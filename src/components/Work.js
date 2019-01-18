import React, { Component } from 'react';

import './Work.css';
import "typeface-karla";

class Work extends Component {
    render() {
        return (
            <div className="Work">
                <h1>
                    my Work...
                </h1>
                <p>
                    I am a full time <span>computer science</span> student at KIT.
                </p>
                <p>
                    In addition I'm a working student at <span>Abusix</span> in the Hoepfner-Burg in Karlsruhe.
                </p>
            </div>
        );
    }
}

export default Work;