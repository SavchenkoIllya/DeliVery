import { useContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
//styles
import styles from "./Header.module.scss";
//components
import { LoggedOutNav } from "./LoggedOutNav/LoggedOutNav";
import LoggedInNav from "./LoggedInNav/LoggedInNav";
//Types
import { Props } from "../../Types/types";

export const Header: React.FC<Props> = ({
  cartItems,
  setOpenCart,
  setOpenLogin,
  setOpenSignup,
}) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <p>DeliVery</p>
        <p className={styles.descriptor}>Making your life tasty</p>
      </div>
      <div className={styles.objects}>
        {currentUser ? (
          <LoggedInNav />
        ) : (
          <LoggedOutNav
            setOpenLogin={setOpenLogin}
            setOpenSignup={setOpenSignup}
          />
        )}
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
