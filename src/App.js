import React, { Component } from 'react';
import Header from './components/Header.js';
import About from './components/About.js';
import Work from './components/Work.js';
import Experiences from './components/Experiences.js';
import Footer from './components/Footer.js';

import "typeface-roboto";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Thomas Dissert"/>
        <About />
        <Work />
        <Experiences />
        <Footer author='Thomas Dissert' year='2019' email='info@thomasdissert.com' linkedin='https://www.linkedin.com/in/thomasdissert' xing='https://www.xing.com/profile/Thomas_Dissert'/>
      </div>
    );
  }
}

export default App;
