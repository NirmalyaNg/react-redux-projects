import { useSelector } from "react-redux";

const CartTotal = () => {
  const cart = useSelector((state) => state.cart);
  const subTotal = parseFloat(
    cart.products
      .map((product) => +product.price * product.quantity)
      .reduce((price1, price2) => {
        return price1 + price2;
      }, 0)
  ).toFixed(2);
  return (
    <div className="row">
      <div className="col-sm-12 mt-4">
        <div className="card shadow p-3" style={{ marginTop: "20px" }}>
          <div className="card-body">
            <h3 className="text-center">Cart Total</h3>
            <hr />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>ITEMS : {cart.products.length}</div>
              <div>
                <h4>${subTotal}</h4>
              </div>
            </div>
            <div className="form-group mt-3">
              <label>PROMO CODE</label>
              <input type="text" className="form-control" />
            </div>
            <button className="btn btn-primary mt-3">APPLY</button>
            <hr />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>TAX:</div>
              <div>
                <h4>$10.00</h4>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>TOTAL COST:</div>
              <div>
                <h4>${parseFloat(+subTotal + 10).toFixed(2)}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
