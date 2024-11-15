import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about_img" />
        <img src={play_icon} alt="" className="play_icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iure exercitationem rem. Minus enim commodi incidunt tempora culpa, velit magni officia eius libero ipsum nam, optio doloribus temporibus voluptatibus provident!</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quaerat id beatae fugit itaque laborum laudantium, ut ipsum est molestias eius ipsa eos. Laboriosam explicabo repudiandae maxime fugit error libero!</p>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat aspernatur nobis facere laboriosam voluptas labore vel nisi asperiores,</p>
      </div>
    </div>
  );
};

export default About;
