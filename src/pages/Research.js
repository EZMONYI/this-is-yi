import React from 'react';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/research';

const Projects = () => (
  <Main
    title=""
    description="Learn about Michael D'Angelo's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>Research Projects</h2>
          <p>A selection of my academic research projects,
            both ongoing preprints and published papers.
            Click on picture or title to see detail pages.
          </p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
