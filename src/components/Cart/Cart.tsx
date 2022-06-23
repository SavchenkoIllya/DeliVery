import React, { useEffect } from "react";
//components
import BackButton from "./Accets/BackButton/BackButton";
import { CartItem } from "./Accets/CartItem/CartItem";
import { OrderForm } from "./Accets/OrderForm/OrderForm";
import styles from "./Cart.module.scss";

interface CartProps {
  updateState(a: any): void;
  cartItems: any[];
}

export const Cart: React.FC<CartProps> = (props) => {

  return (
    <div className={styles.container} id='cartContainer'>
    <div className={styles.wrapper}>
      <div>
        {props.cartItems.length > 0 ? (
          <div>
            <header>
              <BackButton />
              <p>Your order</p>
            </header>
            <div className={styles.cartContent}>
              <CartItem
                updateState={props.updateState}
                cartItems={props.cartItems}
              />
              <OrderForm
                updateState={props.updateState}
                cartItems={props.cartItems}
              />
            </div>
          </div>
        ) : (
          <div className={styles.empty}>
            <header>
              <BackButton />
              <p>Your cart is empty</p>
            </header>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};
