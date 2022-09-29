import "./itemcount.css";
import { useState } from "react";

const ItemCount = ({ stock = 5, initial = 1, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="Counter">
            <div className="Controls">
                <h4 className="Number">{quantity}</h4>
                <button className="Button" onClick={increment}>
                    +
                </button>
                <button className="Button" onClick={decrement}>
                    -
                </button>
            </div>
        </div>
    );
};

export default ItemCount;
