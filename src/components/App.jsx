import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DataTable from './DataTable/DataTable';
import Details from './Details/Details';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.appContainer}>
      <h1>Welcome to the Municipal Library Infocenter</h1>
      <Routes>
        <Route path="/" element={<DataTable />} />
        <Route path="/book/:id" element={<Details />} />
      </Routes>
    </div>
  );
};
