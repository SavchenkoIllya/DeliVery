import { useEffect, useState } from "react";
//styles
import styles from "./Shop.module.scss";
//firebase
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
//Types
import { Product, Props } from "../../Types/types";
//components
import { Cards } from "./Cards/Cards";

export const Shop: React.FC<Props> = ({ updateState, cartItems }) => {
  const db = firebase.firestore().collection("products");
  const [data, setData] = useState<Product>([]);
  
  useEffect(() => {
    db.onSnapshot(async (querySnapshot) => {
      const items: any = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
    });
  }, []);

  return (
    <>
      <h3 className={styles.headling}>Burgers</h3>
      <div className={styles.wrapper}>
        <Cards data={data} updateState={updateState} cartItems={cartItems} />
      </div>
    </>
  );
};
