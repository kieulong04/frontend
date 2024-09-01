
import { Link, NavLink } from "react-router-dom"
import { CartIcon, Logo, SearchIcon, UserIcon, WishListIcon } from "./icons"

const Header = () => {
  return (
    <header className="header">
    <div className="container">
      <div className="header-inner">
        <a href="" className="header__logo">
          <img src={Logo} alt="" />
        </a>
        <nav className="main-menu">
          <ul className="main-menu__list">
            <li className="main-menu__item">
              <NavLink  to="/" className="main-menu__link">Home</NavLink>
            </li>
            <li className="main-menu__item">
              <NavLink to="/shop" className="main-menu__link">Shop</NavLink>
            </li>
            <li className="main-menu__item">
              <Link to="/about" className="main-menu__link">About</Link>
            </li>
            <li className="main-menu__item">
              <Link to="/contact" className="main-menu__link">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="header-items">
          <div className="header-item-user">
            <span><img src={UserIcon} alt="" /></span>
          </div>
          <div className="header-item-user">
            <span><img src={SearchIcon} alt="" /></span>
          </div>
          <div className="header-item-user">
            <span><img src={WishListIcon} alt="" /></span>
          </div>
          <div className="header-item-user">
            <span><img src={CartIcon} alt="" /></span>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header