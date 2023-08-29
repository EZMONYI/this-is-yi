import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Yi's personal website. CMU Music Technology graduate, "
    + 'multi-instrumentalist.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Construction ongoing...</Link></h2>
          <p>
            A series of paper which I am leading as co-first author
            or participating as major contributor is coming this fall,
            as well as some independent and collaborative
            music performances and productions, stay in tune!
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
