import React from 'react';
import { Button } from '../button/Button';
import './heroSection.css';
import '../../App.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="./videos/video-1.mp4" autoPlay loop muted type="video/mp4" />
      <h1>Adventure Awaits</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Watch Trailer <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
