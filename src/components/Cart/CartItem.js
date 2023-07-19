import { useCartContext } from "../../context/CartContext";
import styles from "./Cart.module.css";

function CartItem({ item }) {
  const { addToCart, decreaseQty, removeFromCart } = useCartContext();

  return (
    <div className={styles.CartItem}>
      <div className={styles.RemoveItem} onClick={() => removeFromCart(item)}>
        <img alt="remove" src="https://t4.ftcdn.net/jpg/03/46/38/39/240_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg" />
      </div>
      <div className={styles.ItemDesc}>
        <div className={styles.ItemImage}>
          <img alt={item.title} src={item.image} />
        </div>
        <div className={styles.AboutItem}>
          <p>{item.title}</p>
          <p>Rs. {item.price}</p>
        </div>
      </div>
      <div className={styles.ItemQty}>
        <div className={styles.QtyImage}>
          <img
            alt="plus"
            src="https://cdn-icons-png.flaticon.com/128/3574/3574956.png"
            onClick={() => addToCart(item)}
          />
        </div>

        <h4>{item.qty}</h4>

        <div className={styles.QtyImage}>
          <img
            alt="plus"
            src="https://cdn-icons-png.flaticon.com/128/3574/3574956.png"
            className={styles.ReverseArrow}
            onClick={() => decreaseQty(item)}
          />
        </div>

        <h2>Rs. {item.qty * item.price}</h2>
      </div>
    </div>
  );
}

export default CartItem;
