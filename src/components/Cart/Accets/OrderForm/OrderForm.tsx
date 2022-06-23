import React, { useRef } from "react";
import styles from "./OrderForm.module.scss";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { collection, addDoc } from "firebase/firestore";

interface OrderFormProps {
  updateState(a: any): void;
  cartItems: any[];
}

export const OrderForm: React.FC<OrderFormProps> = (props) => {
  const db = firebase.firestore();
  const timeRef: any = useRef<string>(null);
  const adressRef: any = useRef<string>(null);
  const userNameRef: any = useRef<string>(null);
  const telRef: any = useRef<string>(null);
  const extraRef: any = useRef<string>(null);

  async function sendData() {
    await addDoc(collection(db, "orders"), {
      order: props.cartItems,
      name: userNameRef.current.value,
      telephone: telRef.current.value,
      time: timeRef.current.value,
      adress: adressRef.current.value,
      extra: extraRef.current.value,
    });
    let emptyArr: any[] = [];
    props.updateState(emptyArr);
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.header}>Delivery information</p>
      <form>
        <p>Your name and surname</p>
        <input
          id="cUserName"
          type={"text"}
          placeholder="Name Surname"
          ref={userNameRef}
        />
        <p>Your telephone number</p>
        <input id="cTelephone" type={"tel"} placeholder="+491234567890" ref={telRef} />
        <p>Time</p>
        <input id="cTime" type={"time"} placeholder="" ref={timeRef} />
        <p>Adress</p>
        <input
          id="cAdress"
          type={"text"}
          ref={adressRef}
          placeholder="New York Salmonella str 254, 12"
        />
        <p>Additional wishes</p>
        <textarea ref={extraRef} id="cExtra" />
        <input
          onClick={(e) => {
            e.preventDefault();
            sendData();
          }}
          className={styles.button}
          type={"submit"}
          value="Submit"
        />
      </form>
    </div>
  );
};
