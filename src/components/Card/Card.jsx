import PropTypes from "prop-types";
import { useState } from "react";

function Card(props) {
  const [value, setValue] = useState(props.productCount);
  const updateProductCounts = (updatedValue) => {
    props.setProductCounts(
      props.productCounts.map((product) => {
        if (product.id === props.product.id) {
          return { ...product, productCount: updatedValue };
        } else {
          return product;
        }
      })
    );
  };

  const handleChange = (e) => {
    const newValue = e.target.value.startsWith("-") ? "0" : e.target.value;
    setValue(newValue);
    updateProductCounts(newValue);
  };

  const handleClick = (e) => {
    const form = e.target.parentElement;
    const quantity = Number(form.querySelector("input").value);
    const operation = e.target.textContent;
    let newValue;
    if (operation === "+") {
      newValue = String(quantity + 1);
      setValue(newValue);
      updateProductCounts(newValue);
    } else if (operation === "-" && quantity) {
      newValue = String(quantity - 1);
      setValue(newValue);
      updateProductCounts(newValue);
    } else {
      setValue("0");
    }
  };

  return (
    <div className="card" data-testid="card-container">
      <img src={props.product.image} alt={props.product.description} />
      <p>{props.product.title}</p>
      <p>{`$ ${props.product.price}`}</p>
      <form onSubmit={props.handleSubmit}>
        <button type="button" onClick={handleClick}>
          -
        </button>
        <label>
          Quantity:
          <input type="number" min={0} onChange={handleChange} value={value} />
        </label>
        <button type="button" onClick={handleClick}>
          +
        </button>
        <button type="submit">Send to cart</button>
      </form>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.exact({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
  }),
  productCount: PropTypes.string,
  setProductCount: PropTypes.func,
  productCounts: PropTypes.array,
  setProductCounts: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default Card;
