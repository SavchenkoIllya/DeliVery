//styles
import styles from "./Shop.module.scss";
//components
import { Cards } from "./Cards/Cards";

export const Shop: React.FC = () => {
  return (
    <>
      <h3 className={styles.headling}>Burgers</h3>
      <div className={styles.wrapper}>
        <Cards />
      </div>
    </>
  );
};
