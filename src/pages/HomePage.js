import React from 'react';
import MovieCard from '../components/MovieCard';

// Mảng dữ liệu giả (Mock Data)
const mockMovies = [
  { id: 1, title: 'Avatar: The Way of Water', description: 'Hành trình mới tại hành tinh Pandora.', image: 'https://via.placeholder.com/200x250?text=Avatar' },
  { id: 2, title: 'Avengers: Endgame', description: 'Trận chiến cuối cùng của các siêu anh hùng.', image: 'https://via.placeholder.com/200x250?text=Avengers' },
  { id: 3, title: 'Interstellar', description: 'Hành trình xuyên không gian tìm kiếm hành tinh mới.', image: 'https://via.placeholder.com/200x250?text=Interstellar' }
];

function HomePage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Danh Sách Phim Nổi Bật</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {mockMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;