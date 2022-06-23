import React from "react";
import styles from "./BackButton.module.scss";

export default function BackButton() {
  function hideCart() {
    document.querySelector(".Cart")?.classList.toggle("show");
  }

  return (
    <button onClick={() => hideCart()} className={styles.back}>
      <i className={styles.ggClose}></i>
      Close cart
    </button>
  );
}
