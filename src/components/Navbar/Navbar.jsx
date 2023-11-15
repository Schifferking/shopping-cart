import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ name, productCount }) {
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
          {name === "shop" && (
            <li>
              <button onClick={checkout}>{`Checkout ${productCount}`}</button>
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
};

export default Navbar;
