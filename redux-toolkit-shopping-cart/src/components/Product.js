import { useDispatch } from "react-redux";
import classes from "./Product.module.css";
import { cartActions } from "../store/cart/cartSlice";

const Product = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(cartActions.addToCart(data));
  };

  return (
    <div className="col-sm-4 mb-3">
      <div className="card shadow p-4 text-center">
        <img
          src={data.image}
          className={`card-img-top img-fluid ms-auto me-auto ${classes.productImage}`}
          alt={data.title}
        />
        <div className={`card-body ${classes.productBody}`}>
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">
            $<b>{data.price}</b>
          </p>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
