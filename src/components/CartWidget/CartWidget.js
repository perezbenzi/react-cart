import cart from "./assets/cart-icon.png";
import "./cartwidget.css";

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <img src={cart} alt="cart" width="30px" /> 0
        </div>
    );
};

export default CartWidget;
