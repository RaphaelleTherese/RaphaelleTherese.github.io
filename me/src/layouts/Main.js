import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Navigation from '../components/template/Navigation';
import SideBar from '../components/template/SideBar';
import ScrollToTop from '../components/template/ScrollToTop';

const Main = (props) => (
  <HelmetProvider>
    <ScrollToTop />
    <Helmet titleTemplate="%s | Raphaelle Therese Guinanao" defaultTitle="Raphaelle Therese Guinanao" defer={false}>
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <div id="wrapper">
      <Navigation />
      <div id="main">
        {props.children}
      </div>
      {props.fullPage ? null : <SideBar />}
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Raphaelle Therese Guinanao's personal website.",
};

export default Main;