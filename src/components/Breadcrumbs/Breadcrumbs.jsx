import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({ bookName }) => {
  const { id } = useParams();

  return (
    <div className={styles.breadcrumbs}>
      <Link to="/" aria-label="Home">
        Home
      </Link>
      {id && (
        <>
          <span> {'>'} </span>
          <Link to={`/book/${id}`}>{bookName}</Link>
        </>
      )}
    </div>
  );
};

Breadcrumbs.propTypes = {
  bookName: PropTypes.string.isRequired,
};
Breadcrumbs.defaultProps = {
  bookName: '',
};

export default Breadcrumbs;
