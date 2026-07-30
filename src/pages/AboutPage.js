import React from 'react';
import './AboutPage.css'; 

function AboutPage() {
  const teamMembers = [
    { id: 'A', name: 'Trần Tấn Phong', role: 'Đảm nhận Header & Footer', icon: '🎨' },
    { id: 'B', name: 'Hứa Văn Khang', role: 'Trang chủ & Dữ liệu phim', icon: '🎬' },
    { id: 'C', name: 'Kim Khánh Duy', role: 'Trang giới thiệu', icon: '💻' },
    { id: 'D', name: 'Kim Khánh Duy', role: 'Trang chi tiết phim', icon: '🔍' },
  ];

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>Giới Thiệu Nhóm Phát Triển</h1>
        <p className="about-subtitle">Dự án Xây dựng Website Giới Thiệu Phim - Bài Thực Hành 08</p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <div className="team-card" key={member.id}>
            <div className="card-icon">{member.icon}</div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>

      <div className="about-footer">
        <p>Cảm ơn thầy/cô và các bạn đã trải nghiệm sản phẩm!</p>
      </div>
    </div>
  );
}

export default AboutPage;