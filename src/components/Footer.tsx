const Footer = () => {
  return (
    <footer>
    <div className="container">
      <div className="footer-list">
        <div className="footer-item">
          <img src="./assets/logo.svg" alt="" />
          <p className="footer">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <div className="footer-nav">
          <div className="footer-item">
            <h2 className="footer-title">Links</h2>
            <ul className="footer-menu-list">
              <li className="footer-menu-item">
                <a href="" className="footer-menu-link">Home</a>
              </li>
              <li className="footer-menu-item">
                <a href="" className="footer-menu-link">Shop</a>
              </li>
              <li className="footer-menu-item">
                <a href="" className="footer-menu-link">Blog</a>
              </li>
              <li className="footer-menu-item">
                <a href="" className="footer-menu-link">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h2 className="footer-title">Help</h2>
            <ul className="footer-menu-list">
              <li className="footer-menu-item">
                <a href="" className="footer-menu-link">Payment Options</a>
              </li>
              <li className="footer-menu-item">
                <a href="" className="footer-menu-link">Returns</a>
              </li>
              <li className="footer-menu-item">
                <a href="" className="footer-menu-link">Privacy Policies</a>
              </li>
              <li className="footer-menu-item">
                <a href="" className="footer-menu-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-item">
          <h2 className="footer-title">Newsletter</h2>
          <form action="" className="newsletter">
            <input type="text" className="newsletter__input" placeholder="Enter Your Email Address" />
            <button className="newsletter__btn">Subscribe</button>
          </form>
        </div>
      </div>
      <p className="copyright">2023 furino. All rights reverved</p>
    </div>
  </footer>
  )
}

export default Footer