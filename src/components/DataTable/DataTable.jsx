import React, { useEffect, useState } from 'react';
import styles from './DataTable.module.css';
import { useTable } from 'react-table';
import { Link } from 'react-router-dom';
import { getData } from '../../shared/services/api';

function DataTable() {
  const [data, setData] = useState([]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Book',
        accessor: 'Title',
        Cell: ({ cell: { value }, row: { original } }) => (
          <Link to={`/book/${original.id}`}>{value}</Link>
        ),
      },
      {
        Header: 'Rate (votes)',
        accessor: 'Rate',
      },
    ],
    []
  );

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result.data);
    }

    fetchData();
  }, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div>
      <h2 className={styles.heading}>Pick a book</h2>
      <table {...getTableProps()} className={styles.table}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                tabIndex="0"
                className={
                  row.original.Rate >= 9
                    ? `${styles.tableRow} ${styles.recommended}`
                    : styles.tableRow
                }
              >
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
