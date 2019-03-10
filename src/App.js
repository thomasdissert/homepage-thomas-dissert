import React, { Component } from 'react';
import './App.css';
import "typeface-roboto";

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="everything">
          <div className="mainImage">
            <img src={require('./images/name.png')} alt="thomasdissert" className="image"/>
            <div className="impressum">
              <a href="mailto:info@thomasdissert.com">&lt;Kontakt&gt;</a> &amp; <a href="mailto:info@thomasdissert.com">&lt;Impressum&gt;</a>
            </div>
          </div>
          <div className="links">
            <a href="https://www.twitch.tv/thomasdissert">
              <img src={require('./images/twitch.png')} alt="Twitch" className="image"/>
            </a>
            <a href="https://www.youtube.com/channel/UCSjBSymr5mQk_D40DUyjAjg">
              <img src={require('./images/youtube.png')} alt="Youtube" className="image"/>
            </a>
            <a href="https://www.twitter.com/thomasdissert">
              <img src={require('./images/twitter.png')} alt="Twitter" className="image"/>
            </a>
            <a href="https://www.github.com/thomasdissert">
              <img src={require('./images/github.png')} alt="Github" className="image"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
