import { Link } from 'react-router-dom';
import React from 'react';

export const columns = [
  {
    Header: 'Book Title',
    accessor: 'Title',
    Cell: ({ cell: { value }, row: { original } }) => (
      <Link to={`/book/${original.id}`}>{value}</Link>
    ),
  },
  {
    Header: 'Rate (votes)',
    accessor: 'Rate',
  },
];
