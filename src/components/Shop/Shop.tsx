import React, { useEffect, useState } from "react";
//styles
import styles from "./Shop.module.scss";
//firebase
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Cards } from "./Cards/Cards";
//components

interface ShopProps {
  updateState(a: any): void;
  cartItems: any;
}

export const Shop: React.FC<ShopProps> = (props) => {
  const db = firebase.firestore().collection("products");
  const [data, setData] = useState<any[]>([]);
  const [loader, setLoader] = useState<boolean>(true);

  function GetData() {
    db.onSnapshot(async (querySnapshot) => {
      const items: any = [];
      await querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
      setLoader(false);
    });
  }

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div>
      <h3 className={styles.headling}>Burgers</h3>
      <div className={styles.wrapper}>
        <Cards
          data={data}
          updateState={props.updateState}
          cartItems={props.cartItems}
        />
      </div>
    </div>
  );
};
