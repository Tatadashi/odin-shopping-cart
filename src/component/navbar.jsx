import style from '../style/navbar.module.css';

export default function Navbar() {
    return (
        <div className={style.bar}>
            <button className={style.title}>Odin Shop</button>
            <button className={style.cart} title='Shopping Cart Button'></button>
            <div className={style.item} title='Items in Cart'>99+</div>
        </div>
    );
}