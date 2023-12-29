import React from 'react';
import PropTypes from 'prop-types';
// import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
            {(data.link) ? (<a href={data.link} target="_blank" rel="noreferrer">{data.title}</a>) : (data.title)}
        </h3>
        {/* <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time> */}
        <time className="published">{data.date}</time>
      </header>
      <a href={data.link} target="_blank" rel="noreferrer" className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
      <div className="description">
        <p>{data.desc}</p>
        {(data.stack) ? (<p><strong>Stack: {data.stack}</strong></p>) : (<></>)}
        {(data.code_link) ? (<p><a href={data.code_link} target="_blank" rel="noreferrer">GitHub Repo/ Presentation</a></p>) : (<></>)}
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    code_link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    stack: PropTypes.string,
  }).isRequired,
};

export default Cell;
