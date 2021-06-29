import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
    const cartitems = <ul className={classes["cart-items"]}>{[{id:"c1",name:"sushi",amount:2,price:12.99}].map(item => <li>{item.name}</li>)}</ul>;
    return(
        <Modal onHide={props.onHide}>
            {cartitems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>34.55</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onHide}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}
export default Cart;