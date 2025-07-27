import './skills.css';

function Skills() {
  const skills = [
    { src: '/images/skills/react.svg', title: 'React' },
    { src: '/images/skills/javascript.svg', title: 'JavaScript' },
    { src: '/images/skills/MongoDB.svg', title: 'MongoDB' },
    { src: '/images/skills/html.svg', title: 'HTML' },
    { src: '/images/skills/css.svg', title: 'CSS' },
    { src: '/images/skills/tailwind-css.svg', title: 'Tailwind CSS' },
    { src: '/images/skills/Node.js.svg', title: 'Node.js' },
    { src: '/images/skills/Express.svg', title: 'Express' },
    { src: '/images/skills/Vercel.svg', title: 'Vercel' },
    { src: '/images/skills/mysql.svg', title: 'MySQL' },
    { src: '/images/skills/Git.svg', title: 'Git' },
    { src: '/images/skills/Vite.js.svg', title: 'Vite.js' },
    { src: '/images/skills/Solidity.svg', title: 'Solidity' },
    { src: '/images/skills/ethereum.svg', title: 'ETH' },
    { src: '/images/skills/metamask.svg', title: 'Metamask' },
  ];

  return (
    <div className="skills-container" id="skills">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-content">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.src} className="skill-icon" alt={skill.title} />
            <span className="skill-title">{skill.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
