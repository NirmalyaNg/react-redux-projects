import { Fragment } from "react";
import classes from "./LoadingSpinner.module.css";
const LoadingSpinner = () => {
  return (
    <Fragment>
      <div className={`${classes.backdrop}`}></div>
      <div className={`${classes.spinner}`}>
        <div className={`${classes["lds-ring"]}`}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoadingSpinner;
