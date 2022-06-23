import React from "react";
import { auth } from "../../../../firebase";
import styles from "./CartItem.module.scss";

interface CartItemProps {
  updateState(a: any): void;
  cartItems: any[];
}

export const CartItem: React.FC<CartItemProps> = (props) => {
  let arr: any[] = props.cartItems;

  function removeFromCart(e: any) {
    let elId = e.target.getAttribute("data-el-id");
    let newArr = arr.filter((f) => {
      return f !== props.cartItems.find((el: { id: number }) => el.id == elId);
    });
    props.updateState(newArr);
  }

  function increase(e: any) {
    let elId = e.target.getAttribute("data-el-id");
    let target = props.cartItems.find((obj: any) => obj.id == elId);
    target.quantaty = ++target.quantaty;
    props.updateState([...props.cartItems]);
  }

  function decrease(e: any) {
    let elId = e.target.getAttribute("data-el-id");
    let target = props.cartItems.find((obj: any) => obj.id == elId);
    if (target.quantaty > 1) {
      target.quantaty = --target.quantaty;
      props.updateState([...props.cartItems]);
    } else {
      removeFromCart(e);
    }
  }

  let sum = props.cartItems.reduce((acc, obj) => {
    return acc + obj.price * obj.quantaty;
  }, 0);

  return (
    <div className={styles.mainWrapper}>
      {props.cartItems.map((el: any, index) => (
        <div key={index} className={styles.cartItem}>
          <img alt="" src={el.pic} />
          <div className={styles.itemInfo}>
            <p>{el.name}</p>
            <p>{el.weight} gr</p>
          </div>
          <a data-el-id={el.id} onClick={(e) => increase(e)}>
            +
          </a>
          <p>{el.quantaty}</p>
          <a data-el-id={el.id} onClick={(e) => decrease(e)}>
            -
          </a>
          <p>{el.quantaty * el.price} €</p>
          <i
            data-el-id={el.id}
            onClick={(e) => removeFromCart(e)}
            className={styles.ggClose}
          ></i>
        </div>
      ))}
      <div className={styles.price}>
        <p>Total price</p>
        <p>{auth.currentUser ? (sum * 0.9).toFixed(2) : sum} €</p>
      </div>
    </div>
  );
};
