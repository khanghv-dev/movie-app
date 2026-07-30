import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <h2>🎬 PhimHay Online</h2>
      <nav>
        <Link to="/" style={styles.link}>Trang chủ</Link> | {' '}
        <Link to="/about" style={styles.link}>Giới thiệu</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: { background: '#282c34', padding: '15px 30px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  link: { color: '#61dafb', textDecoration: 'none', margin: '0 10px', fontWeight: 'bold' }
};

export default Header;