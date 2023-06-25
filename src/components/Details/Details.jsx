import React from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { useParams } from 'react-router-dom';
import { getData } from '../../shared/services/api';
import styles from './Details.module.css';

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
      <h2 className={styles.heading}>{authorData.Author}</h2>
      <table className={styles.detailsTable}>
        <tbody>
          <tr tabIndex="0" className={styles.detailRow}>
            <th>Title</th>
            <td>{authorData.Title}</td>
          </tr>
          <tr tabIndex="0" className={styles.detailRow}>
            <th>Genre</th>
            <td>{authorData.Genre}</td>
          </tr>
          <tr tabIndex="0" className={styles.detailRow}>
            <th>Format</th>
            <td>{authorData.Format}</td>
          </tr>
          <tr tabIndex="0" className={styles.detailRow}>
            <th>Pages</th>
            <td>{authorData.Pages}</td>
          </tr>
          <tr tabIndex="0" className={styles.detailRow}>
            <th>Available</th>
            <td>
              {authorData.Available
                ? 'Yes, you can borrow'
                : 'No, it is already borrowed'}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Details;
