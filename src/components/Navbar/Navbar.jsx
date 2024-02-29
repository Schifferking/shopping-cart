import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ name, productCount, onClick }) {
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
          {name === "shop" && <li>Product count: {productCount}</li>}
          {name === "shop" && (
            <li>
              <button onClick={onClick}>Checkout</button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  name: PropTypes.string,
  productCount: PropTypes.number,
  onClick: PropTypes.func,
};

export default Navbar;
