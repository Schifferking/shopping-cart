import PropTypes from "prop-types";
import Card from "../Card/Card";

function Shop(props) {
  if (props.error) return <p>A network error was encountered.</p>;
  if (props.loading) return <p>Loading...</p>;

  return (
    <div>
      <p>This is the shop page</p>
      <ul>
        {props.products &&
          props.products.map((product) => {
            return (
              <li key={product.id}>
                <Card
                  product={product}
                  productCount={
                    props.productCounts[product.id - 1].productCount
                  }
                  setProductCount={props.setProductCount}
                  productCounts={props.productCounts}
                  setProductCounts={props.setProductCounts}
                ></Card>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

Shop.propTypes = {
  error: PropTypes.object,
  loading: PropTypes.bool,
  products: PropTypes.array,
  productCount: PropTypes.number,
  setProductCount: PropTypes.func,
  productCounts: PropTypes.array,
  setProductCounts: PropTypes.func,
};

export default Shop;
