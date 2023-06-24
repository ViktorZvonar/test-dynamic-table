import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Breadcrumbs = ({ authorName }) => {
  const { id } = useParams();

  return (
    <div>
      <Link to="/">Home</Link>
      {id && (
        <>
          <span> {'>'} </span>
          <Link to={`/author/${id}`}>{authorName}</Link>
        </>
      )}
    </div>
  );
};

export default Breadcrumbs;
