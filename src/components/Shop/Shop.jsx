import PropTypes from "prop-types";
import Card from "../Card/Card";

function Shop(props) {
  const calculateProductCount = () => {
    const initialValue = 0;
    const newProductCount = props.productCounts.reduce(
      (accumulator, currentValue) => {
        const currentProductcount = Number(currentValue.productCount);
        return accumulator + currentProductcount;
      },
      initialValue
    );

    return newProductCount;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setProductCount(calculateProductCount());
  };

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
                  handleSubmit={handleSubmit}
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
  setProductCount: PropTypes.func,
  productCounts: PropTypes.array,
  setProductCounts: PropTypes.func,
};

export default Shop;
