import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div style={styles.card}>
      <img src={movie.image} alt={movie.title} style={styles.image} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <Link to={`/movie/${movie.id}`} style={styles.button}>Xem Chi Tiết</Link>
    </div>
  );
}

const styles = {
  card: { border: '1px solid #ccc', borderRadius: '8px', padding: '15px', width: '200px', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' },
  image: { width: '100%', height: '250px', objectFit: 'cover', borderRadius: '4px' },
  button: { display: 'inline-block', marginTop: '10px', padding: '8px 12px', background: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '4px' }
};

export default MovieCard;