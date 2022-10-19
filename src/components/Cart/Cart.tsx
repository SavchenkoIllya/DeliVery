//components
import { BackButton } from "./Accets/BackButton/BackButton";
import { CartItem } from "./Accets/CartItem/CartItem";
import { OrderForm } from "./Accets/OrderForm/OrderForm";
import { useContext } from "react";
import { AuthContext } from "../../appContext";
//Styles
import styles from "./Cart.module.scss";

export const Cart: React.FC = () => {
  const { cartItems, setOpenCart, openCart } = useContext(AuthContext);
  if (!openCart) return null;
  return (
    <div className={styles.container} onClick={() => setOpenCart!(false)}>
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        <div>
          {cartItems!.length > 0 ? (
            <div>
              <header>
                <BackButton />
                <p className={styles.headling}><span>Your</span> order:</p>
              </header>
              <div>
                <CartItem />
                <OrderForm />
              </div>
            </div>
          ) : (
            <div className={styles.empty}>
              <header>
                <BackButton />
                <p>
                  Your cart is <span>empty :(</span>
                </p>
              </header>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
