import { Fragment, useEffect, useState } from "react";
import SidebarContent from "./SidebarContent";
import classes from "./SideBar.module.css";
const SideBar = () => {
  const [categories, setCategories] = useState([]);
  const [showSidebarContent, setShowSidebarContent] = useState(false);

  const handleSidebarClose = () => {
    setShowSidebarContent(false);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/categories");
        const categories = await response.json();
        setCategories(categories);
      } catch (e) {
        setCategories([]);
      }
    };
    fetchCategories();
  }, []);

  return (
    <Fragment>
      <button
        className={`${classes.sidebarToggler}`}
        onClick={() => setShowSidebarContent(!showSidebarContent)}
      >
        <i className="fa-solid fa-caret-right"></i>
      </button>
      {showSidebarContent && (
        <div className={`${classes.sidebarBackdrop}`} onClick={handleSidebarClose}></div>
      )}
      <SidebarContent
        categories={categories}
        onClose={handleSidebarClose}
        show={showSidebarContent}
      />
    </Fragment>
  );
};

export default SideBar;
