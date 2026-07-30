import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './DetailPage.css'; // Import file CSS

function DetailPage() {
  const { id } = useParams();

  return (
    <div className="detail-container">
      <div className="detail-card">
        <h2 className="detail-title">Chi Tiết Bộ Phim (ID: {id})</h2>
        
        <div className="detail-content">
          <div className="detail-image-placeholder">
            🎬 Hình ảnh Poster Phim
          </div>
          
          <div className="detail-info">
            <p><strong>Mô tả:</strong> Đây là phần nội dung chi tiết của bộ phim. Tại đây sẽ hiển thị tóm tắt cốt truyện, diễn biến và những điểm nổi bật đáng chú ý nhất.</p>
            <p><strong>Đạo diễn:</strong> Đang cập nhật...</p>
            <p><strong>Diễn viên:</strong> Đang cập nhật...</p>
            <p><strong>Thể loại:</strong> Hành động, Viễn tưởng</p>
            <p><strong>Năm phát hành:</strong> 2026</p>
          </div>
        </div>

        <Link to="/" className="back-button">← Quay lại Trang Chủ</Link>
      </div>
    </div>
  );
}

export default DetailPage;