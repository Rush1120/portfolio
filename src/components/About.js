import React from 'react';
import './About.css';

const About = () => {
  const skills = ['HTML5 & CSS3', 'JavaScript', 'React', 'Node.js'];

  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>Hey there! I'm Aarushi Kalia—a software developer with a love for clean code, great films, and a music taste that swings from classical symphonies to indie deep cuts. I'm still new to the tech world, but I learn fast—every bug is just a plot twist, every fix a character arc.</p>
          <p>I believe good software, like good cinema, should be smooth, engaging, and leave an impact. When I'm not coding, I'm probably lost in a film analysis rabbit hole or discovering new music like it's a full-time job. Life's a playlist, and I'm always adding new tracks.</p>
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 