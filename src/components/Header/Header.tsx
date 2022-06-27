import { useContext } from "react";
//styles
import styles from "./Header.module.scss";
//components
import { LoggedOutNav } from "./LoggedOutNav/LoggedOutNav";
import LoggedInNav from "./LoggedInNav/LoggedInNav";
//Types
import { AuthContext } from "../../appContext";

export const Header: React.FC = () => {
  const { cartItems, setOpenCart, currentUser } = useContext(AuthContext);
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <p>DeliVery</p>
        <p className={styles.descriptor}>Making your life tasty</p>
      </div>
      <div className={styles.objects}>
        {currentUser ? <LoggedInNav /> : <LoggedOutNav />}
        <div className={styles.quantatyWrapper}>
          <div className={styles.cartWrapper}>
            <a onClick={() => setOpenCart!(true)}>
              <i className="gg-shopping-cart"></i>
            </a>
          </div>
          {cartItems!.length >= 1 ? (
            <p className={styles.quantaty}>{cartItems!.length}</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
