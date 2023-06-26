import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './Loader/Loader';
import styles from './App.module.css';

const DataTable = React.lazy(() => import('./DataTable/DataTable'));
const Details = React.lazy(() => import('./Details/Details'));

export const App = () => {
  return (
    <div className={styles.appContainer}>
      <h1>Municipal Library Infocenter</h1>
      <Suspense
        fallback={
          <div
            style={{
              position: 'fixed',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Loader />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<DataTable />} />
          <Route path="/book/:id" element={<Details />} />
        </Routes>
      </Suspense>
    </div>
  );
};
