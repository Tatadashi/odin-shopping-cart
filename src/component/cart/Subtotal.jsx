import style from '../../style/cart/Subtotal.module.css'

export default function Subtotal() {
    return (
        <div className={style.cart}>
            <h2>Shipping: $10.00</h2>
            <h2>Subtotal: $100.00</h2>
            <h2>Tax: $10.50 </h2>
            <h2>Total: $110.50</h2>
            <button>Checkout</button>
        </div>
    );
}