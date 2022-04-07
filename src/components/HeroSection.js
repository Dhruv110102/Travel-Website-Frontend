import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='Hero-container'>
            <video src="\video\video-1.mp4" autoPlay loop muted/>
            <h1>ADVENTURE AWAITS</h1>
            <p>WHAT ARE YOU WAITING FOR?</p>
            <p>Connecting India to the whole World</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>GET STARTED</Button>
      
            </div>
        </div>
    )
}

export default HeroSection
