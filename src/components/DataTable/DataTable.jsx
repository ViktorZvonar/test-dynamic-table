import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';
import { Link } from 'react-router-dom';
import { getData } from '../../shared/services/api';

function DataTable() {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Author',
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
            <tr
              {...row.getRowProps()}
              onClick={() => setSelectedRow(row.original)}
              style={{
                background:
                  selectedRow && row.original.id === selectedRow.id
                    ? '#00afec'
                    : 'white',
              }}
            >
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
