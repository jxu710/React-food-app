import mealsImg from "../../assets/meals.jpeg";
import classes from "./Header.module.css";

import HeaderCartButoon from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Food Ordering App</h1>
        <HeaderCartButoon />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="table of full of foods" />
      </div>
    </>
  );
};

export default Header;
