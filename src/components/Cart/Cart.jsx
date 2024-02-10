import { CartContext } from "../../store/shopping-cart-context";
import { useContext } from "react";
import classes from './Cart.module.css';

export default function Cart() {
    const { items, updateItemQuantity } = useContext(CartContext);

    const totalPrice = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const formattedTotalPrice = `${totalPrice.toFixed(2)} лв.`;

    return (
        <div className={classes.cart}>
            {items.length === 0 && <p>Нямате добавени артикули в количката!</p>}
            {items.length > 0 && (
                <ul className={classes[`cart-items`]}>
                    {items.map((item) => {
                        const formattedPrice = `${item.price.toFixed(2)} лв.`;

                        return (
                            <li key={item.id}>
                                <img src={item.image} alt={item.title} />
                                <span>{item.title}</span>
                                <span>{formattedPrice}</span>

                                <div className={classes[`cart-item-actions`]}>
                                    <button onClick={() => updateItemQuantity(item.id, -1)}> - </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateItemQuantity(item.id, 1)}> + </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
            <p className={classes[`cart-total-price`]}>
                <span>Крайна сума</span>
                <span><strong>{formattedTotalPrice}</strong></span>
            </p>

        </div>
    )
}