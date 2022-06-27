import { Key, useContext } from "react";
import { AuthContext } from "../../../../appContext";
import { auth } from "../../../../firebase";
//Styles
import styles from "./CartItem.module.scss";

export const CartItem: React.FC = () => {
  const { setItems, cartItems } = useContext(AuthContext);
  const removeFromCart = (id: number) => {
    setItems!(cartItems!.filter((item: { id: number }) => item.id !== id));
    let oldCart = JSON.parse(localStorage.getItem("cart") || "[]");
    localStorage.setItem(
      "cart",
      JSON.stringify(oldCart.filter((item: { id: number }) => item.id !== id))
    );
  };

  const increase = (id: number) => {
    let target = cartItems!.find((obj: any) => obj.id == id);
    target!.quantaty = ++target!.quantaty;
    setItems!([...cartItems!]);
    localStorage.setItem("cart", JSON.stringify([...cartItems!]));
  };

  const decrease = (id: number) => {
    let target = cartItems!.find((obj: any) => obj.id == id);
    if (target!.quantaty > 1) {
      target!.quantaty = --target!.quantaty;
      setItems!([...cartItems!]);
      localStorage.setItem("cart", JSON.stringify([...cartItems!]));
    } else {
      removeFromCart(id);
    }
  };

  let sum = cartItems!.reduce((acc: number, { price, quantaty }: any) => {
    return acc + Number(price) * quantaty;
  }, 0);

  return (
    <div className={styles.mainWrapper}>
      {cartItems!.map((el: any, index: Key | null | undefined) => {
        const { name, quantaty, price, weight, id, pic } = el;
        return (
          <div key={index} className={styles.cartItem}>
            <img alt={name} src={pic} />
            <div className={styles.itemInfo}>
              <p>{name}</p>
              <p>{weight} gr</p>
            </div>
            <a onClick={() => increase(id)}>+</a>
            <p>{quantaty}</p>
            <a onClick={() => decrease(id)}>-</a>
            <p>{quantaty * price} €</p>
            <i
              onClick={() => removeFromCart(id)}
              className={styles.ggClose}
            ></i>
          </div>
        );
      })}
      <div className={styles.price}>
        <p>Total price</p>
        <p>{auth.currentUser ? (sum * 0.9).toFixed(2) : sum} €</p>
      </div>
    </div>
  );
};
