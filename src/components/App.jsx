import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DataTable from './DataTable/DataTable';
import Details from './Details/Details';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: '#010101',
      }}
    >
      <h3>Welcome to the Municipal Library Infocenter</h3>

      <Routes>
        <Route path="/" element={<DataTable />} />
        <Route path="/author/:id" element={<Details />} />
      </Routes>
    </div>
  );
};
