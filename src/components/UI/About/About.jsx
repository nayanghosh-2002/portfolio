import './about.css';

function About() {
  return (
    <div className="about-container" id="about">
      <h2 className="about-heading">About Me!</h2>
      
      <div className="about-content">
        <p>
          I’m a <span className="highlighted-text">MERN Stack</span> developer passionate about transforming innovative ideas into robust, real-world web applications. My latest deep dive is into the exciting world of <span className="highlighted-text">Blockchain</span> where I’m focused on crafting secure and transparent solutions.
        </p>

        <p>
          I thrive on building, from intense hackathon sprints to late night personal side projects and love exploring new technologies.
        </p>
        <p>
           Always growing, always exploring the possibilities 🚀
        </p>

        <p className="favorite-quote-title"><span className="highlighted-text">Favorite Quote:</span></p>
        <blockquote className="favorite-quote">
          <strong>
            <p>तत् त्वम् असि </p>
            <p>Tat Tvam Asi </p>
            <div className='from'>

              <p>  
                <span className="highlighted-text" > 
                  ~ <a rel="noopener noreferrer" href='https://youtu.be/H1CCxw6eHYc' target='_blank' className='quote-link'>
                    <span className='h'>Upanishad</span>
                  </a>
                </span>
              </p>
            </div>
          </strong>
        </blockquote>
      </div>
    </div>
  );
}

export default About;