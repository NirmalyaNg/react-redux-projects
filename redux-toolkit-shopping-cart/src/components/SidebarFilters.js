import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts, productActions } from "../store/product/productSlice";

const SidebarFilters = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const dispatch = useDispatch();

  const handleMinPriceChange = (e) => {
    if (+e.target.value < 0) {
      return;
    }
    setMinPrice(+e.target.value);
  };
  const handleMaxPriceChange = (e) => {
    if (+e.target.value < 0) {
      return;
    }
    setMaxPrice(+e.target.value);
  };
  const handlePriceFilter = () => {
    dispatch(
      productActions.filterByPrice({
        min: minPrice,
        max: maxPrice,
      })
    );
  };
  const handleClearFilter = () => {
    setMinPrice(0);
    setMaxPrice(0);
    dispatch(fetchProducts());
  };

  return (
    <Fragment>
      <h5>
        <b>FILTERS</b>
      </h5>
      <div className="form-group">
        <label className="form-label">Min. Price</label>
        <input
          type="number"
          className="form-control"
          min="0"
          value={minPrice}
          onChange={handleMinPriceChange}
        />
      </div>
      <div className="form-group mt-2">
        <label className="form-label">Max. Price</label>
        <input
          type="number"
          className="form-control"
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />
      </div>
      <button className="btn btn-primary btn-sm mt-2" onClick={handlePriceFilter}>
        Filter
      </button>
      <button className="btn btn-danger btn-sm mt-2 ms-2" onClick={handleClearFilter}>
        Clear Filter
      </button>
    </Fragment>
  );
};

export default SidebarFilters;
