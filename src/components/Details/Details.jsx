import React from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { useParams } from 'react-router-dom';
import { getData } from '../../shared/services/api';

function Details() {
  const { id } = useParams();
  const [authorData, setAuthorData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await getData();
      const author = res.data.find(item => item.id === id);
      setAuthorData(author);
    };

    fetchData();
  }, [id]);

  if (!authorData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Breadcrumbs authorName={authorData.Author} />
      <h2>{authorData.Author}</h2>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <td>{authorData.Title}</td>
          </tr>
          <tr>
            <th>Genre</th>
            <td>{authorData.Genre}</td>
          </tr>
          <tr>
            <th>Format</th>
            <td>{authorData.Format}</td>
          </tr>
          <tr>
            <th>Price</th>
            <td>{authorData.Price}</td>
          </tr>
          <tr>
            <th>Available</th>
            <td>{authorData.Available ? 'Yes' : 'No'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Details;
