import React from 'react';
import { Link } from 'react-router-dom';

// import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Raphaelle Therese Guinanao</h2>
        <p><a href="mailto:rtguinanao@gmail.com">rtguinanao@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Raphaelle. I like building things.</p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      {/* <ContactIcons /> */}
      <p className="copyright">&copy; Raphaelle Therese Guinanao <Link to="/">raphaelletherese.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;