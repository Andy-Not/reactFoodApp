import classes from "./Header.module.css"
import mealsImage from "../../assets/img.png"
import {Fragment} from "react";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return(<Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onShow={props.onShow}/>
        </header>
        <div className={classes["main-image"]}>
            <img src={mealsImage} alt="table with food"/>
        </div>
    </Fragment>)
}
export default Header;