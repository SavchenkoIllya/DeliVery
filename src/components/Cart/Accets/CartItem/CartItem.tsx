import { Key, useContext } from "react";
import { AuthContext } from "../../../../appContext";
import { auth } from "../../../../firebase";
import defaultPicture from "../../../../Assets/defaultPicture.jpg";
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
          <>
            <div key={index} className={styles.cartItem}>
              <div className={styles.itemInfo}>
                <img alt={name} src={pic || defaultPicture} />
                <p className={styles.name}>{name}</p>
                <p>{weight} gr</p>
              </div>
              <div className={styles.controllers}>
                <div className={styles.ammount}>
                  <a onClick={() => increase(id)}>+</a>
                  <p>{quantaty}</p>
                  <a className={styles.gray} onClick={() => decrease(id)}>
                    -
                  </a>
                </div>
                <p className={styles.medium}>{quantaty * price} €</p>
                <i
                  onClick={() => removeFromCart(id)}
                  className={styles.ggClose}
                ></i>
              </div>
            </div>
            <div className={styles.hl}></div>
          </>
        );
      })}
      <div className={styles.price}>
        <p>Total price:</p>
        <p>{auth.currentUser ? (sum * 0.9).toFixed(2) : sum} €</p>
      </div>
    </div>
  );
};
