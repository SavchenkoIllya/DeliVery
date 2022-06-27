//styles
import { Props } from "../../../Types/types";
import styles from "./LoggedOutNav.module.scss";

export const LoggedOutNav: React.FC<Props> = ({
  setOpenLogin,
  setOpenSignup
}) => {
  return (
    <>
      <button onClick={() => setOpenLogin!(true)} className={styles.login}>
        Log in
      </button>
      <button onClick={() => setOpenSignup!(true)} className={styles.sign}>
        Sign up
      </button>
    </>
  );
};
