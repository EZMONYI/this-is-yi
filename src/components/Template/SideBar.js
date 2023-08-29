import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/icon_mugen.jpg`} alt="" />
      </Link>
      <header>
        <h2>Yi</h2>
        <p><a href="mailto:ezzmonyi@gmail.com">ezzmonyi@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Yi. I am a <a href="https://www.cmu.edu/cfa/music/programs/graduate-programs/grad-music-technology.html">CMU Music Technology Master Program</a> graduate student
        and a multi-instrumentalist, check out my <a href="https://www.youtube.com/@ezzmonyi">YouTube channel</a> and <a href="https://space.bilibili.com/23294708">Bilibili channel</a> for my music production and performances.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Yi <Link to="/">this-is-yi.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
