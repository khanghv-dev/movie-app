import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div style={styles.card}>
      <div style={styles.imageWrapper}>
        <img src={movie.image} alt={movie.title} style={styles.image} />
        <span style={styles.rating}>⭐ {movie.rating}</span>
        <span style={styles.category}>{movie.category}</span>
      </div>
      <div style={styles.info}>
        <h3 style={styles.title}>{movie.title}</h3>
        <p style={styles.desc}>{movie.description}</p>
        <Link to={`/movie/${movie.id}`} style={styles.button}>Xem Chi Tiết</Link>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s ease'
  },
  imageWrapper: {
    position: 'relative',
    height: '260px'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  rating: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    color: '#facc15',
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: 'bold'
  },
  category: {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '2px 8px',
    borderRadius: '4px',
    fontSize: '11px',
    fontWeight: 'bold'
  },
  info: {
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  title: {
    fontSize: '1.1rem',
    margin: '0 0 8px 0',
    color: '#f8fafc',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  desc: {
    fontSize: '0.85rem',
    color: '#94a3b8',
    margin: '0 0 15px 0',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },
  button: {
    marginTop: 'auto',
    display: 'block',
    textAlign: 'center',
    padding: '8px 0',
    backgroundColor: '#334155',
    color: '#60a5fa',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    fontSize: '0.9rem'
  }
};

export default MovieCard;