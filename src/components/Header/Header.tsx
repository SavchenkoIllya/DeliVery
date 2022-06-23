import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
//styles
import styles from "./Header.module.scss";
//components
import LoggedOutNav from "./LoggedOutNav/LoggedOutNav";
import LoggedInNav from "./LoggedInNav/LoggedInNav";

interface HeaderProps {
  cartItems: any;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const auth = getAuth();
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  function showCart() {
    document.querySelector(".Cart")?.classList.toggle("show");
  }

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
            <a onClick={() => showCart()}>
              <i className="gg-shopping-cart"></i>
            </a>
          </div>
          {props.cartItems.length >= 0 ? (
            <p className={styles.quantaty}>{props.cartItems.length}</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
