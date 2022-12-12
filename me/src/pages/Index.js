
import anime from 'animejs';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Main from '../layouts/Main';
import BackgroundAnimation from '../components/template/BackgroundAnimation';

const Index = () => {
    return (
        <Main
          description={"Raphaelle Guinanao's personal website"}
        >
          {/* <article className="post" id="index"> */}
            <BackgroundAnimation />
            {/* <header>
                <div className="title">
                    <h2 data-testid="heading">About Me</h2>
                    <p>
                    SOFTWARE ENGINEER | {new Date().getFullYear()}
                    </p>
                </div>
            </header>
            <p> Welcome to my website! Please feel free to read more <Link to="/about">about me</Link>,
            or you can check out my {' '}
            <Link to="/resume">resume</Link>, {' '}
            <Link to="/projects">projects</Link>, {' '}
            or <Link to="/contact">contact</Link> me.
            </p>
            <p> Source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p> */}
          {/* </article> */}
        </Main>
    );
}

export default Index;