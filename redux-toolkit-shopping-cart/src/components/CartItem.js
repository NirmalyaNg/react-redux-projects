import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart/cartSlice";
import classes from "./CartItem.module.css";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };
  const handleIncreaseCount = () => {
    dispatch(cartActions.increment(product.id));
  };
  const handleDecreaseCount = () => {
    dispatch(cartActions.decrement(product.id));
  };

  return (
    <div className="card shadow p-4 mb-3" style={{ border: "none" }}>
      <div className="row g-0">
        <div className="col-md-2">
          <img
            src={product.image}
            className="img-fluid rounded-start mt-3"
            style={{ width: "120px", height: "120px" }}
            alt={product.title}
          />
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <div className={`card-text ${classes.productBody}`}>
              <div className="price">
                <h5>
                  $<b>{product.price}</b>
                </h5>
              </div>
              <div className="quantity">
                <h5>
                  <button className="btn me-2" onClick={handleDecreaseCount}>
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <b>{product.quantity}</b>
                  <button className="btn  ms-2" onClick={handleIncreaseCount}>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </h5>
              </div>
            </div>
            <p className="card-text">
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleRemoveFromCart(product.id)}
              >
                Remove
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
