import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ isShop = false }) {
  const navigate = useNavigate();
  const checkout = () => {
    navigate("/checkout");
  };

  return (
    <div>
      <h1>Generic shopping cart name</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          {isShop && <button onClick={checkout}>Checkout</button>}
        </ul>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  isShop: PropTypes.boolean,
};

export default Navbar;
