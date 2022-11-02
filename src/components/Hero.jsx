import React from "react";
import './css/Hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero--img">
                <img src="src/assets/flame-team-working-together-on-a-website-design.gif" alt="hero--searching" className="hero--img_portrait" />
            </div>
            <div className="hero--detail">
                <strong><p className="hero--detail_intro">Hi, I'm Nikhil Omkar👋</p></strong>
                <p className="hero--detail_para">
                    I'm currently a student who is learning the ways of the UX design. I want to create products which are user-centric and create an impact in the world, big or small.
                </p>
                <button className="hero--detail_btn">MY DESIGNS</button>
            </div>
        </div>
    )
}

export default Hero;