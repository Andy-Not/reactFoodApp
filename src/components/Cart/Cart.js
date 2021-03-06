import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import {useContext} from "react";
import CartContext from "../../store/Cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const cartItemRemoveHandler = (id) => {};
    const cartItemAddHandler = (item) => {};

    const cartitems = <ul className={classes["cart-items"]}>{cartCtx.items.map(item =>
                         <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null,item)}/>)}
                      </ul>
    const hasItems = cartCtx.items.length > 0;

    return(
        <Modal onHide={props.onHide}>
            {cartitems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onHide}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}
export default Cart;