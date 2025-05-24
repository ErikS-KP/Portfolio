import React from 'react';

{/* Project Card function */}
function Project({ title, description, links }){
    return(
    <article className="project-card">
      <h3>Featured Project</h3>
      <h4>{ title }</h4>
      <p>
        { description }
      </p>
      <div className="project-links">
        <a href={links} target="_blank">View Project</a>
      </div>
    </article>
    )
  }

{/* Hjem skjerm Funksjon */}
function Home(){
    return(
        <>
        {/* Header og Navigation */}
        <header>
          <nav>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>

        {/* Hoved del / All informasjon */}
        <main>
            <section id="hero" style={{ background: 'var(--accent-gray)', position: 'relative' }}>
                <p style={{ color: '#64ffda', marginBottom: '1rem' }}>Hi, my name is</p>
                <h1 style={{ fontSize: '4rem', fontWeight: '700', marginBottom: '1rem' }}>Erik</h1>
                <h2 style={{ fontSize: '3rem', color: '#8892b0', marginBottom: '2rem' }}>
                Bringing your ideas to life
                </h2>
                <p style={{ maxWidth: '600px', color: '#8892b0', marginBottom: '3rem' }}>
                I'm a software developer specializing in building exceptional digital experiences.
                Currently, I'm focused on building accessible, human-centered products.
                </p>
                <a href="#projects" className="cta-button">Check out my work</a>
            </section>

            {/* About me */}
            <section id="about">
                <h2>About Me</h2>
                <div className="about-content">
                <div className="about-text">
                    <p>
                    Hello! I'm Erik, a student and software developer who enjoys building useful, creative projects for the web.
                    I got into coding through personal projects, and I’ve been developing my skills in Python and React ever since.

                    </p>
                    <p>
                    Fast-forward to today, and I've had the privilege of working at schools. 
                    My main focus these days is building accessible, inclusive products and digital experiences.
                    </p>
                </div>
                {/* Liste av ferdigheter */}
                <div className="skills">
                    <h3>Technologies I work with:</h3>
                    <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>Blender 3d</li>
                    </ul>
                </div>
                </div>
            </section>

            {/* Framhevede Prosjekter */}
            <section id="projects">
                <h2>Things I've Built</h2>
                <div className="projects-grid">

                {/* Bruk av Project funksjon for å minimere kode */}
                {/* Attributter: Tittel, kort sammendrag og link til prosjekt */}
                <Project title="Machine learning" description="A handwritten-digit-recognizer optimized for classifying digits." links="https://github.com/Kire008/Number-recognition-AI"/>
                <Project title="Test 1" description="Testing purposes" links="google.com"/>
                <Project title="Test 1" description="Testing purposes" links="https://www.google.com/"/>


                </div>
                <a href="projects" id='all-proj-btn'>View All Projects</a>
            </section>

            {/* Kontakt meg / Bestill ordere */}
            <section id="contact">
                <h2>Get In Touch</h2>
                <div className="contact-content">
                <div className="contact-text">
                    <p>
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
                    I'll try my best to get back to you!
                    </p>
                    <div className="social-links">
                    <a href="#" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
                <form className="contact-form">
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <textarea rows="5" placeholder="Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
                </div>
            </section>
        </main>

        <footer>
            <p>Designed & Built by Erik Sømming</p>
        </footer>
        </>
    )};

export default Home;