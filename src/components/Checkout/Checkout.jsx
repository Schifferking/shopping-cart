import PropTypes from "prop-types";

function Checkout({ productCount }) {
  return (
    <div>
      <p>This is the checkout page</p>
      <p>Product count: {productCount}</p>
      <button>Buy</button>
      <p>Note: This project doesn&#39;t implement buying logic.</p>
    </div>
  );
}

Checkout.propTypes = {
  productCount: PropTypes.number,
};

export default Checkout;
