import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import Product from "../components/Product";
import { fetchProducts } from "../store/cart/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="row mt-3">
      <div className="col-sm-12">
        <div className="row">
          {product.error && <h5 className="text-center">Unable to fetch products</h5>}
          {product.loading && <LoadingSpinner />}
          {!product.loading &&
            product.products.map((product) => <Product key={product.id} data={product} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
