import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          Redux Cart
        </Link>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-link" to="/home" activeClassName="active">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/cart" activeClassName="active">
              Cart &nbsp;
              <span>
                <b>({cart.products.length})</b>
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
