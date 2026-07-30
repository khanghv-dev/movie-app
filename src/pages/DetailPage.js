import React from 'react';
import { useParams, Link } from 'react-router-dom';

function DetailPage() {
  const { id } = useParams();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Chi Tiết Bộ Phim (ID: {id})</h2>
      <p>Mô tả chi tiết nội dung phim, diễn viên, đạo diễn và thông tin chiếu phim sẽ hiển thị tại đây.</p>
      <Link to="/">← Quay lại Trang Chủ</Link>
    </div>
  );
}

export default DetailPage;