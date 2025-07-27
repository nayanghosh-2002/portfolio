import React, { useEffect, useState } from 'react';
import './footerstyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const chaosEmojis = ['😶‍🌫️', '🤯', '🌀', '😵‍💫', '🎢'];
    const codeEmojis = ['💻', '🖥️', '⌨️', '📟', '🖱️'];

    const [chaosIndex, setChaosIndex] = useState(0);
    const [codeIndex, setCodeIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setChaosIndex((prevIndex) => (prevIndex + 1) % chaosEmojis.length);
            setCodeIndex((prevIndex) => (prevIndex + 1) % codeEmojis.length);
        }, 900);

        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="footer-container">
            <div className="social-icons">
                <a href="https://github.com/nayanghosh-2002" target="_blank" rel="noopener noreferrer" className="icon" aria-label="GitHub">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://x.com/itsnayangh" target="_blank" rel="noopener noreferrer" className="icon" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.linkedin.com/in/nayanghosh2002/" target="_blank" rel="noopener noreferrer" className="icon" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div><br></br>

            <p className="footer-text" style={{ marginBottom: 10 }}>
                Crafted with cosmic guidance, coffee ☕ in hand, chaos {chaosEmojis[chaosIndex]} in mind, code {codeEmojis[codeIndex]} on screen
            </p><br></br>
            <p>
                Copyright © 2025 : All rights reserved
            </p><br></br>
            <p className="footer-text">
                Made with ❤️ by <span className="footer-dev-name">Nayan</span>
            </p>
        </footer>
    );
}

export default Footer;
