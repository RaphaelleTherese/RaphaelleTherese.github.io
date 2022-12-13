import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    {/* <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h3>Hi, I'm Raphaelle Therese Guinanao</h3>
        <p><a href="mailto:rtguinanao@gmail.com">rtguinanao@gmail.com</a></p>
      </header>
    </section> */}

    <section className="blurb">
        <header>
            <h2>Hi, I'm Raphaelle Therese</h2>
        </header>
        <p>I love to learn and build things.</p>
        <p>I studied Computer Science at the University of Arizona and have had a plethora of experiences working with the <a href="https://techcore.arizona.edu/" target="_blank">Tech Core</a>, <a href="https://madelab.arizona.edu/" target="_blank">UArizona Space Grant</a>, <a href="https://plaid.com/" target="_blank">Plaid</a>, and <a href="https://www.rtx.com/" target="_blank">Raytheon</a>.</p>
        <p>Feel free to browse and <a href="mailto:rtguinanao@gmail.com">reach out!</a></p>

        <ul className="actions">
            <li>
                {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
            </li>
        </ul>
    </section>

    <section id="footer">
        <ContactIcons />
        <p className="copyright">&copy; Raphaelle Therese Guinanao <Link to="/">raphaelletherese.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;