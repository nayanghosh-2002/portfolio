import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'MAKAUT University',
      year: '2022 - 2026',
      details: 'Focusing on MERN stack and Blockchain development.',
    },
    {
      degree: 'Higher Secondary',
      institution: 'Santinagar Vidyamandir',
      year: '2019 - 2021',
      details: ' Built a solid foundation in logic and programming.',
    },
    {
      degree: 'Secondary',
      institution: 'Ramakrishna Mission High School Asansol',
      year: '2013 - 2019',
      details: 'Focused on science and mathematics fundamentals.',
    },
  ];

  return (
    <section className="edu-section" id="education">
      <h2 className="edu-title">Education</h2><br></br>
      <div className="timeline-container">
        {educationData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3>{item.degree}</h3>
              <h4>{item.institution}</h4>
              <p>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
