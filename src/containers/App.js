import React, { Component } from 'react';
import Banner from './banner/Banner.js';
import Description from './description/Description.js';
import People from './people/People.js';
import Contacts from './contacts/Contacts.js';
import Test from './test/Test.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Description />
        <People />
        <Test />
        <Contacts />
      </div>
    );
  }
}

export default App;
