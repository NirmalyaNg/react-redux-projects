import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts, fetchProductsByCategory } from "../store/product/productSlice";
import classes from "./SidebarContent.module.css";
import SidebarFilters from "./SidebarFilters";

const SidebarContent = (props) => {
  const dispatch = useDispatch();
  const handleCategoryChange = (category) => {
    dispatch(fetchProductsByCategory(category));
  };
  const handleAllCategory = () => {
    dispatch(fetchProducts("ALL_CATEGORIES"));
  };
  return (
    <div className={`offcanvas offcanvas-start ${props.show ? "show" : ""}`} tabIndex="-1">
      <div className="offcanvas-header mb-2" style={{ borderBottom: "1px solid lightgray" }}>
        <h5 className="offcanvas-title">Categories</h5>
        <button type="button" className="btn-close" onClick={props.onClose}></button>
      </div>
      {/* <small>RESET CATEGORIES</small> */}
      <div className="offcanvas-body">
        <div
          className={`${classes.category}`}
          style={{ cursor: "pointer" }}
          onClick={handleAllCategory}
        >
          ALL PRODUCTS
        </div>
        {props.categories.map((category, index) => (
          <Fragment key={index}>
            <div
              className={`${classes.category}`}
              style={{ cursor: "pointer" }}
              onClick={() => handleCategoryChange(category)}
            >
              {category.toUpperCase()}
            </div>
          </Fragment>
        ))}
        <hr />
        <SidebarFilters />
      </div>
    </div>
  );
};

export default SidebarContent;
