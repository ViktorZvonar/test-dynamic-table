import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DataTable from './DataTable/DataTable';
import Details from './Details/Details';

export const App = () => {
  return (
    <div>
      <h1>My Dynamic Table</h1>

      <Routes>
        <Route path="/" element={<DataTable />} />
        <Route path="/author/:id" element={<Details />} />
      </Routes>
    </div>
  );
};
