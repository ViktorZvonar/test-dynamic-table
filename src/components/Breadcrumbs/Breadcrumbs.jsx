import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Breadcrumbs = ({ bookName }) => {
  const { id } = useParams();

  return (
    <div>
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
