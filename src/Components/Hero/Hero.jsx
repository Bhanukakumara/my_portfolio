import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <img src={profile_img} alt="" />
      <h1><span>I'm Bhanuka Kumara,</span> frontend developer based in Sri Lanka</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minus
        magnam sed asperiores, ratione expedita eligendi veniam? Enim ducimus
        quidem voluptatibus provident. Sapiente vel culpa, magnam eos officia
        unde cumque. Tempore inventore natus est itaque harum architecto facere
        esse laboriosam aliquam magnam fugit quo et nesciunt sequi, id
        asperiores eum unde maiores voluptatibus qui ea dolores eos a vero.
        Labore.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' onClick={()=>setMenu("contact")}>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
