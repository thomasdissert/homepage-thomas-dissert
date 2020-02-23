import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';

const params = {
  "particles": {
    "number": {
      "value": 200,
    },
    "color": {
      "value": "#b33333"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 4
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.2728729963008632,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4.445745992601726,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "move": {
      "enable": true,
      "speed": 9.41362896154328,
      "direction": "bottom-right",
      "random": true,
      "straight": true,
      "out_mode": "out",
      "bounce": false,
    }
  },
  "retina_detect": true
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles params={params} width="100vw" height="100vh"/>
        <div className="main">
          <div className="symbol">
            #
          </div>
          <div className="name">
            <b>Thomas</b>
            <br/>
            <div className="surname">Dissert</div>
          </div>
        </div>
        <div className="title">
          Fullstack Software Developer
        </div>
        <div className="contact">
          <a href="mailto:info@thomasdissert.com">Contact</a>
        </div>
        
        {/* <div className="links">
          <a href="https://www.twitter.com/thomasdissert">
            <img src={require('./images/twitter.png')} alt="Twitter" className="image"/>
          </a>
          <a href="https://www.github.com/thomasdissert">
            <img src={require('./images/github.png')} alt="Github" className="image"/>
          </a>
        </div> */}
      </div>
    );
  }
}

export default App;
