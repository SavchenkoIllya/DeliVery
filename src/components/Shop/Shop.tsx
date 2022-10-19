//styles
import styles from "./Shop.module.scss";
//components
import { Cards } from "./Cards/Cards";

export const Shop: React.FC = () => {
  return (
    <>
      <h3 id="menu" className={styles.headling}>
        Burgers <span>menu</span>
      </h3>
      <div className={styles.wrapper}>
        <Cards />
      </div>
    </>
  );
};
