import { Props } from "../../../../Types/types";
import styles from "./BackButton.module.scss";

export const BackButton: React.FC<Props> = ({ setOpenCart }) => {
  return (
    <button className={styles.back} onClick={() => setOpenCart!(false)}>
      <i className={styles.ggClose}></i>
      Close cart
    </button>
  );
};
