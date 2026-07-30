import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <NavLink to="/" className="logo">
          Movie<span>App</span>
        </NavLink>

        <nav className="navigation">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Trang chủ
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Giới thiệu
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;