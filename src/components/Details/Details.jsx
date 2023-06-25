import React from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { useParams } from 'react-router-dom';
import { getData, updateData } from '../../shared/services/api';
import styles from './Details.module.css';

function Details() {
  const { id } = useParams();
  const [bookData, setBookData] = React.useState(null);
  const [hasVoted, setHasVoted] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await getData();
      const book = res.data.find(item => item.id === id);
      setBookData(book);
    };

    fetchData();
  }, [id]);

  if (!bookData) {
    return <div>Loading...</div>;
  }

  const handleVote = async () => {
    if (hasVoted) {
      alert("You've already voted.");
      return;
    }

    const updatedBook = {
      ...bookData,
      Rate: bookData.Rate + 1,
    };

    try {
      const res = await updateData(updatedBook);
      if (res.data) {
        setBookData(updatedBook);
        setHasVoted(true);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <Breadcrumbs bookName={bookData.Title} />
      <h2 className={styles.heading}>{bookData.Title}</h2>
      <table className={styles.detailsTable}>
        <tbody>
          <tr tabIndex="0" className={styles.detailRow}>
            <th>Author</th>
            <td>{bookData.Author}</td>
          </tr>
          <tr tabIndex="0" className={styles.detailRow}>
            <th>Genre</th>
            <td>{bookData.Genre}</td>
          </tr>
          <tr tabIndex="0" className={styles.detailRow}>
            <th>Format</th>
            <td>{bookData.Format}</td>
          </tr>
          <tr tabIndex="0" className={styles.detailRow}>
            <th>Pages</th>
            <td>{bookData.Pages}</td>
          </tr>
          <tr tabIndex="0" className={styles.detailRow}>
            <th>Available</th>
            <td>
              {bookData.Available
                ? 'Yes, you can borrow'
                : 'No, it is already borrowed'}
            </td>
          </tr>
          <tr tabIndex="0" className={styles.detailRow}>
            <th>Votes</th>
            <td>
              {bookData.Rate}
              <button onClick={handleVote} style={{ marginLeft: '10px' }}>
                Give your vote as well
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Details;
