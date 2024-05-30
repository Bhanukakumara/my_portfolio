import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              ratione culpa laborum exercitationem aut id delectus magni alias
              animi possimus. Minus nam tempore, quidem minima vel officiis a
              blanditiis enim.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis corporis itaque deserunt soluta aliquid dignissimos
              aperiam? Accusamus, alias molestias a, amet maxime praesentium
              placeat suscipit, corporis sequi perferendis esse sunt? Libero
              veritatis error maxime minus pariatur fuga sunt praesentium!
              Laboriosam totam debitis quaerat quis. Culpa, officia! Ea,
              provident sint? Autem iste ipsa deleniti non ipsum mollitia
              assumenda dolorum maiores dolorem.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>React js</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"80%"}}/></div>
            <div className="about-skill"><p>Laravel</p><hr style={{width:"40%"}}/></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>40+</h1>
          <p>HAPPY CLIENCES</p>
        </div>
      </div>
    </div>
  );
};

export default About;
