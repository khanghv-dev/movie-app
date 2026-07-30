function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-about">
          <h2>
            Movie<span>App</span>
          </h2>

          <p>
            Website giới thiệu phim được xây dựng bằng React
            và React Router.
          </p>
        </div>

        <div className="footer-information">
          <p>Email: movieapp@gmail.com</p>
          <p>Điện thoại: 0702636588</p>
          <p>© 2026 MovieApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;