import './contact.css';

function Contact() {
    return (
        <div className="contact-container" id="contact">
            <h2 className="contact-heading">Contact Me</h2>
            <div className="contact-content">
                Vanakkam! Thanks for taking the time to check out my work. If you have an exciting opportunity, a project idea, or just want to say hi, my inbox is always open! I’ll do my best to get back to you as soon as possible. Looking forward to hearing from you! :)
            </div>
            <div className="contact-button-wrapper">
                <a href="mailto:inkgofficial@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-slide-button">
                    <span className="contact-slide-content">Say Hello!</span>
                </a>
            </div>
        </div>
    );
}

export default Contact;