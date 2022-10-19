import { useContext } from "react";
import { AuthContext } from "../../../appContext";
//styles
import styles from "./LoggedOutNav.module.scss";

export const LoggedOutNav: React.FC = () => {
  const { setOpenLogin, setOpenSignup } = useContext(AuthContext);
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
