import logo from "../assets/logo.png";
import search from "../assets/search.png";
import user from "../assets/user.png";
import love from "../assets/love.png";
import cart from "../assets/cart.png";
const Header = () => {
  return (
    <nav>
        <div className="container">
            <div className="main_menu">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="menus">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
            <div className="icons">
                <a href="#"><img src={search} alt="" /></a>
                <a href="#"><img src={user} alt="" /></a>
                <a href="#"><img src={love} alt="" /></a>
                <a href="#"><img src={cart} alt="" /></a>
            </div>
        </div>
        </div>
    </nav>
  )
}

export default Header