import { Fragment } from "react";
import classes from "./SidebarContent.module.css";

const SidebarContent = (props) => {
  return (
    <div className={`offcanvas offcanvas-start ${props.show ? "show" : ""}`} tabIndex="-1">
      <div className="offcanvas-header mb-2">
        <h5 className="offcanvas-title">Categories</h5>
        <button type="button" className="btn-close" onClick={props.onClose}></button>
      </div>
      <div className="offcanvas-body">
        {props.categories.map((category, index) => (
          <Fragment key={index}>
            <div className={`${classes.category}`} style={{ cursor: "pointer" }}>
              {category.toUpperCase()}
            </div>
            <hr />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default SidebarContent;
