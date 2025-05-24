import React, { useEffect, useState } from 'react';

{/* Prosjekt Card funksjon */}
{/* Attributter: Tittel, Sammendrag, Link */}
function Card({ title, description, link }) {
  return (
    <a href={link} className='p-project-card'>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </a>
  );
}

{/* Funksjon for å få prosjekter av github ved bruk av GitHub API*/}
function Projects() {
  {/* Bruke useState for å lagre repositories */}
  const [repos, setRepos] = useState([]);

  {/* Bruk useEffect og 'fetch' for å bruke GitHub API og lagre repository*/}
  useEffect(() => {
    fetch('https://api.github.com/users/Kire008/repos')
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
          </ul>
        </nav>
      </header>

      {/* Hoved del / Vis Prosjekter */}
      <main id='projects-scroll-page'>
        <h1 className='section-title'>My Projects!</h1>
        <div className='horizontal-projects'>
          {/* Itterer over alle Repositories og bruk Card funksjon */}
          {repos.map(repo => (
            <Card
              key={repo.id}
              title={repo.name}
              description={repo.description || 'No description'}
              link={repo.html_url}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Projects;