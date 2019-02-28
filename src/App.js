import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import Doctor from './Doctors/Doctots';
import Company from './Company/Company';
import Platform from './Platform/Platform';
import Improve from './Improve/Improve';
import Card from './Card/Card';
import Footer from './Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Intro/>
        <Doctor/>
        <Company/>
        <Platform/>
        <Improve/>
        <Card/>
        <Footer/>
      </div>
    );
  }
}

export default App;
