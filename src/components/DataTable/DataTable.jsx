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
        Header: 'Pick an author',
        accessor: 'Author',
        Cell: ({ cell: { value }, row: { original } }) => (
          <Link to={`/author/${original.id}`}>{value}</Link>
        ),
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
    <table
      {...getTableProps()}
      style={{ margin: 'auto', width: '80%', textAlign: 'center' }}
    >
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
            <tr {...row.getRowProps()} tabIndex="0" className={styles.tableRow}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default DataTable;
