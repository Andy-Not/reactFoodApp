import classes from "./Header.module.css"
import mealsImage from "../../assets/img.png"
import {Fragment} from "react";
const Header = () => {
    return(<Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <button>Cart</button>
        </header>
        <div className={classes["main-image"]}>
            <img src={mealsImage} alt="table with food"/>
        </div>
    </Fragment>)
}
export default Header;