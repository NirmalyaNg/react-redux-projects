import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="row">
      <div className="col-sm-8">
        {cart.products.length > 0 && <h4 className="mt-2">My Cart:</h4>}
        {cart.products.length > 0 &&
          cart.products.map((product) => <CartItem product={product} key={product.id} />)}
        {cart.products.length === 0 && <h3 className="mt-3">Your Cart Is Empty ! </h3>}
      </div>
      {cart.products.length !== 0 && (
        <div className="col-sm-4">
          <CartTotal />
        </div>
      )}
    </div>
  );
};

export default Cart;
