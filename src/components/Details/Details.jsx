import React from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { useParams } from 'react-router-dom';
import { getData, updateData } from '../../shared/services/api';
import styles from './Details.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
    return;
  }

  const handleVote = async type => {
    if (hasVoted) {
      Notify.init({
        position: 'center-top',
        timeout: 3000,
      });
      Notify.warning("Oops! You've already voted :)");
      return;
    }

    const updatedBook = {
      ...bookData,
      Rate:
        type === 'like' ? bookData.Rate + 1 : Math.max(bookData.Rate - 1, 0),
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
                ? 'Yes, you can borrow it now'
                : 'No, someone else borrowed it'}
            </td>
          </tr>
          <tr tabIndex="0" className={styles.detailRow}>
            <th>Leave a vote</th>
            <td className={styles.voteCell}>
              <span>{bookData.Rate}</span>
              <div className={styles.buttonContainer}>
                <button
                  aria-label="like"
                  className={styles.button}
                  onClick={() => handleVote('like')}
                >
                  👍
                </button>
                <button
                  aria-label="dislike"
                  className={styles.button}
                  onClick={() => handleVote('dislike')}
                >
                  👎
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Details;
