import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const emojis = ['\u{1F60E}', '\u{1F636}', '\u{1F643}', '\u{1F64A}', '\u{1F63C}', '\u{1F640}', '\u{1F9D0}', '\u{1F92D}', '\u{1F917}', '\u{1F913}', '\u{1F62D}'];

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
            <Link to="/" className="logo">
                {/* <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" /> */}
                <span style={{fontSize: '100px'}}> 
                {emojis[Math.floor(Math.random() * emojis.length)]}
                </span>
            </Link>
            <h2>Hi, I&apos;m Raphaelle Therese</h2>
        </header>
        <p>A software engineer exploring the tech landscape with curiosity &#129488;</p>
        <p>Coding enthusiast, from Full-Stack to Embedded Systems with experiences at <a href="https://techcore.arizona.edu/TeamProfiles.aspx?individual=rtguinanao" target="_blank" rel="noreferrer">Tech Core</a>, <a href="https://madelab.arizona.edu/" target="_blank" rel="noreferrer">UArizona Space Grant</a>, <a href="https://plaid.com/" target="_blank" rel="noreferrer">Plaid</a>, and <a href="https://www.rtx.com/" target="_blank" rel="noreferrer">Raytheon</a>. Eager to learn and create meaningful solutions.</p>
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
