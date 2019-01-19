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
                    I am a full time computer science student at KIT in my 9th semester. 
                    If you are interested, you can read my 
                    <a href="https://primo.bibliothek.kit.edu/primo_library/libweb/action/display.do;jsessionid=2507D14C22170362663E88BE9F0C5941?tabs=detailsTab&ct=display&fn=search&doc=KITSRC515848190&indx=1&recIds=KITSRC515848190&recIdxs=0&elementId=0&renderMode=poppedOut&displayMode=full&frbrVersion=&mode=Basic&vid=KIT&srt=date&tab=kit&dscnt=0&vl(freeText0)=Thomas%20Dissert&dstmp=1547934841517" target="_blank" rel="noopener noreferrer">
                        &nbsp;bachelor thesis
                    </a> about computer vision.
                </p>
                <p>
                    Additionally I'm a working student at <a href="https://www.abusix.com/" target="_blank" rel="noopener noreferrer">Abusix</a> in the Hoepfner-Burg in Karlsruhe.
                </p>
            </div>
        );
    }
}

export default Work;