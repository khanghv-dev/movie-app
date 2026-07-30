import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';

// Mảng dữ liệu giả (Mock Data) mở rộng chuẩn VIP
const mockMovies = [
  {
    id: 1,
    title: 'Avatar: The Way of Water',
    category: 'Viễn Tưởng',
    rating: 8.8,
    description: 'Hành trình mới đầy kịch tính của gia đình Sully tại hành tinh Pandora.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&q=80'
  },
  {
    id: 2,
    title: 'Avengers: Endgame',
    category: 'Hành Động',
    rating: 9.0,
    description: 'Trận chiến siêu kinh điển để giải cứu vũ trụ khỏi tay Thanos.',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=500&q=80'
  },
  {
    id: 3,
    title: 'Interstellar',
    category: 'Viễn Tưởng',
    rating: 8.7,
    description: 'Cuộc phiêu lưu xuyên không gian đi tìm hành tinh sống mới cho nhân loại.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80'
  },
  {
    id: 4,
    title: 'The Dark Knight',
    category: 'Hành Động',
    rating: 9.1,
    description: 'Kỵ sĩ bóng đêm đối đầu với gã hề điên loạn Joker tại thành phố Gotham.',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&q=80'
  },
  {
    id: 5,
    title: 'Spirited Away',
    category: 'Hoạt Hình',
    rating: 8.6,
    description: 'Chuyến phiêu lưu kỳ diệu của cô bé Chihiro vào thế giới linh hồn.',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&q=80'
  },
  {
    id: 6,
    title: 'Your Name',
    category: 'Drama',
    rating: 8.4,
    description: 'Câu chuyện hoán đổi thân xác vượt không gian và thời gian của hai học sinh.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80'
  }
];

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  // Lọc phim theo tìm kiếm và thể loại
  const filteredMovies = mockMovies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tất cả' || movie.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['Tất cả', 'Hành Động', 'Viễn Tưởng', 'Hoạt Hình', 'Drama'];

  return (
    <div style={styles.container}>
      {/* 🚀 Hero Banner Hoành Tráng */}
      <div style={styles.heroBanner}>
        <div style={styles.heroContent}>
          <span style={styles.badge}>🔥 PHIM HOT NHẤT</span>
          <h1 style={styles.heroTitle}>Avatar: The Way of Water</h1>
          <p style={styles.heroDesc}>
            Trải nghiệm siêu phẩm điện ảnh đỉnh cao với chất lượng hình ảnh bùng nổ. Xem ngay bản đẹp HD!
          </p>
          <button style={styles.heroBtn}>▶ Xem Trailer Ngay</button>
        </div>
      </div>

      {/* 🔍 Thanh Tìm Kiếm & Lọc Thể Loại */}
      <div style={styles.filterSection}>
        <input
          type="text"
          placeholder="🔎 Tìm kiếm bộ phim yêu thích..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />

        <div style={styles.categoryGroup}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                ...styles.categoryBtn,
                ...(selectedCategory === cat ? styles.activeCategoryBtn : {})
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 🎬 Danh Sách Phim */}
      <h2 style={styles.sectionTitle}>
        {selectedCategory === 'Tất cả' ? '🍿 Kho Phim Mới Cập Nhật' : `📂 Thể Loại: ${selectedCategory}`}
      </h2>

      {filteredMovies.length > 0 ? (
        <div style={styles.grid}>
          {filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div style={styles.noResult}>
          🚀 Không tìm thấy bộ phim nào phù hợp với từ khóa "{searchTerm}"
        </div>
      )}
    </div>
  );
}

// 🎨 Style CSS-in-JS xịn xò
const styles = {
  container: {
    backgroundColor: '#0f172a',
    color: '#f8fafc',
    minHeight: '100vh',
    paddingBottom: '50px'
  },
  heroBanner: {
    height: '380px',
    backgroundImage: 'linear-gradient(to right, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.4)), url("https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    padding: '0 8%',
    marginBottom: '30px'
  },
  heroContent: {
    maxWidth: '550px'
  },
  badge: {
    backgroundColor: '#ef4444',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 'bold'
  },
  heroTitle: {
    fontSize: '2.8rem',
    margin: '15px 0',
    color: '#ffffff'
  },
  heroDesc: {
    color: '#cbd5e1',
    lineHeight: '1.6',
    marginBottom: '20px'
  },
  heroBtn: {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '1rem',
    boxShadow: '0 4px 14px rgba(59, 130, 246, 0.4)'
  },
  filterSection: {
    padding: '0 8%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '30px'
  },
  searchInput: {
    width: '100%',
    padding: '14px 20px',
    borderRadius: '10px',
    border: '1px solid #334155',
    backgroundColor: '#1e293b',
    color: 'white',
    fontSize: '1rem',
    outline: 'none'
  },
  categoryGroup: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap'
  },
  categoryBtn: {
    backgroundColor: '#1e293b',
    color: '#94a3b8',
    border: '1px solid #334155',
    padding: '8px 18px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'all 0.3s ease'
  },
  activeCategoryBtn: {
    backgroundColor: '#3b82f6',
    color: 'white',
    borderColor: '#3b82f6'
  },
  sectionTitle: {
    padding: '0 8%',
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#e2e8f0'
  },
  grid: {
    padding: '0 8%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '25px'
  },
  noResult: {
    textAlign: 'center',
    padding: '50px',
    color: '#64748b',
    fontSize: '1.2rem'
  }
};

export default HomePage;