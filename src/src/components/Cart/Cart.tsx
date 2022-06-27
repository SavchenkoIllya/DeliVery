//Types
import { Props } from "../../Types/types";
//components
import { BackButton } from "./Accets/BackButton/BackButton";
import { CartItem } from "./Accets/CartItem/CartItem";
import { OrderForm } from "./Accets/OrderForm/OrderForm";
//Styles
import styles from "./Cart.module.scss";

export const Cart: React.FC<Props> = ({
  updateState,
  cartItems,
  setOpenCart,
  openCart,
}) => {
  if (!openCart) return null;
  return (
    <div className={styles.container} onClick={() => setOpenCart!(false)}>
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        <div>
          {cartItems!.length > 0 ? (
            <div>
              <header>
                <BackButton setOpenCart={setOpenCart} />
                <p>Your order</p>
              </header>
              <div className={styles.cartContent}>
                <CartItem updateState={updateState} cartItems={cartItems} />
                <OrderForm updateState={updateState} cartItems={cartItems} />
              </div>
            </div>
          ) : (
            <div className={styles.empty}>
              <header>
                <BackButton setOpenCart={setOpenCart} />
                <p>Your cart is empty</p>
              </header>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
