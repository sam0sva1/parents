import React, { Component } from 'react';
import './banner.css';

class Banner extends Component {
  render() {
    return (
      <div className='banner'>
        <img className='banner__img' src='../../static/images/header2.jpg' />
        <div className='banner__main'>
          <span className='banner_title'>
            Родительская лига
          </span>
          <span className='banner_phrase'>
            Родительский опыт, помноженный на экспертные знания.
          </span>
        </div>
      </div>
    );
  }
}

export default Banner;
