import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({ bookName }) => {
  const { id } = useParams();

  return (
    <div className={styles.breadcrumbs}>
      <Link to="/">Home</Link>
      {id && (
        <>
          <span> {'>'} </span>
          <Link to={`/book/${id}`}>{bookName}</Link>
        </>
      )}
    </div>
  );
};

export default Breadcrumbs;
