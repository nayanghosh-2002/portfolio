import './projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Projects() {
    const projects = [
        {
            title: "Melapp",
            category: "react", 
            description: "Melapp is a full-stack social media app for posting images, updating profiles and connecting users with secure authentication.",
            git: "https://github.com/nayanghosh-2002/Melapp",
            link: "https://melapp-pied.vercel.app/"
        },
        {
            title: "Chatify",
            category: "react", 
            description: "Chatify is a real-time messaging app. Connect instantly with friends, enjoy private chats and see who's online.",
            git: "https://github.com/nayanghosh-2002/Chatify",
            link: "https://chatify-peach.vercel.app/"
        },
        {
            title: "Portfolio",
            category: "react", // 
            description: "Interactive portfolio with smooth animations, project showcases and a creative glimpse into MERN and blockchain development journey.",
            git: "https://github.com/nayanghosh-2002/",
            link: "https://coming-soon-sooty-two.vercel.app/"
        },
        {
            title: "Cuts",
            category: "react", 
            description: "A full-stack URL shortener with user authentication, custom aliases, analytics and personalized dashboards.",
            git: "https://github.com/nayanghosh-2002/CUTS",
            link: "https://cuts-io.vercel.app/"
        },
        {
            title: "Todo App",
            category: "react", 
            description: "A simple and responsive Todo App to add, update, complete and delete tasks with dark/light mode and time reminders.",
            git: "https://github.com/nayanghosh-2002/Todo",
            link: "https://todo-eta-five-33.vercel.app/"
        },
        {
            title: "Puzzle",
            category: "react",
            description: "Challenge your mind! Upload an image, break it into tiles, shuffle and solve the puzzle by swapping adjacent pieces.",
            git: "https://github.com/nayanghosh-2002/puzzle_game",
            link: "https://nayanghosh-2002.github.io/puzzle_game/"
        },
        {
            title: "de-Voting",
            category: "blockchain", 
            description: "Decentralized voting dApp with MetaMask login, Solidity smart contract, secure one-vote system, candidate registration and live voting status.",
            git: "https://github.com/nayanghosh-2002/de-Voting",
            link: "https://de-voting.vercel.app/"
        },
        {
            title: "Health-de ",
            category: "blockchain", 
            description: "Health-de empowers users with a secure, decentralized platform to seamlessly manage their healthcare records and authorize trusted providers on the blockchain",
            git: "https://github.com/nayanghosh-2002/Health-de",
            link: "https://coming-soon-sooty-two.vercel.app/"
        },
        {
            title: "Lotte₹y",
            category: "blockchain", 
            description: "A dynamic dApp on Ethereum. Users enter with ETH and features a transparent, owner controlled winner selection process",
            git: "https://github.com/nayanghosh-2002/Lottery-dApp",
            link: "https://coming-soon-sooty-two.vercel.app/"
        }
    ];

    
    const reactProjects = projects.filter(project => project.category === "react");
    const blockchainProjects = projects.filter(project => project.category === "blockchain");

    return (
        <div className="projects-container" id="projects">
            <h2 className="projects-heading">Projects</h2>

            {/* Section for "React Projects" */}
            <h3 className="projects-subheading">React Projects</h3>
            <div className="projects-grid">
                {reactProjects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className='anchor'>
                                <a href={project.git} target="_blank" rel="noopener noreferrer" className="git" aria-label="GitHub Repository">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="link" aria-label="Live Demo">
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Section for "Blockchain Projects" */}
            <h3 className="projects-subheading">Blockchain Projects</h3>
            <div className="projects-grid">
                {blockchainProjects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className='anchor'>
                                <a href={project.git} target="_blank" rel="noopener noreferrer" className="git" aria-label="GitHub Repository">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;