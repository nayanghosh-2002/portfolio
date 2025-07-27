import './skills.css';

function Skills() {
  const skills = [
    { src: 'src/assets/images/skills/react.svg', title: 'React' },
    { src: 'src/assets/images/skills/javascript.svg', title: 'JavaScript' },
    { src: 'src/assets/images/skills/mongoDB.svg', title: 'MongoDB' },
    { src: 'src/assets/images/skills/html.svg', title: 'HTML' },
    { src: 'src/assets/images/skills/css.svg', title: 'CSS' },
    { src: 'src/assets/images/skills/tailwind-css.svg', title: 'Tailwind CSS' },
    { src: 'src/assets/images/skills/Node.js.svg', title: 'Node.js' },
    { src: 'src/assets/images/skills/express.svg', title: 'Express' },
    { src: 'src/assets/images/skills/vercel.svg', title: 'Vercel' },
    { src: 'src/assets/images/skills/mysql.svg', title: 'MySQL' },
    { src: 'src/assets/images/skills/Git.svg', title: 'Git' },
    { src: 'src/assets/images/skills/Vite.js.svg', title: 'Vite.js' },
    { src: 'src/assets/images/skills/Solidity.svg', title: 'Solidity' },
    { src: 'src/assets/images/skills/ethereum.svg', title: 'ETH' },
    { src: 'src/assets/images/skills/Metamask.svg', title: 'Metamask' },
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
