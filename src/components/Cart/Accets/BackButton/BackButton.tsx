import { useContext } from "react";
import { AuthContext } from "../../../../appContext";
import styles from "./BackButton.module.scss";

export const BackButton: React.FC = () => {
  const { setOpenCart } = useContext(AuthContext);
  return (
    <button className={styles.back} onClick={() => setOpenCart!(false)}>
      <i className={styles.ggClose}></i>
      Close cart
    </button>
  );
};
