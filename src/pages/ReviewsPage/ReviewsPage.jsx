import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'cervices/api';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId)
      .then(({ results }) => setReviews(results))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ul>
      {reviews?.length > 0 ? (
        reviews.map(({ author, content, author_details, id }) => (
          <li key={id}>
            <img
              src={
                author_details.avatar_path?.slice(1) ||
                `https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?w=2000`
              }
              alt={author}
              width="100px"
            />
            <p>Comment: {content}</p>
            <p>Author: {author}</p>
          </li>
        ))
      ) : (
        <h2>Havent any review</h2>
      )}
    </ul>
  );
};

export default ReviewsPage;