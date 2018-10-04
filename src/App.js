import React, { Component } from 'react';
import './App.css';

import Particles from 'react-particles-js';
import "typeface-roboto"

class App extends Component {
  render() {
    return (
      <div className="App">

        <h1>
        <span>T</span>homas <span>D</span>issert
        </h1>
        <Particles 
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 300
              }
            }

          },
          interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                }
            }
        }
        }}
        />
      </div>
      );
  }
}

export default App;
