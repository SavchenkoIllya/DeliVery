//auth
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";

//styles
import styles from "./LoggedInNav.module.scss";

function LoggedInNav() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.userInfo}>
        <i className={styles.ggUser}></i>
        <p>{auth.currentUser?.email}</p>
      </div>
      <div>
        <button onClick={() => signOut(auth)}>Sign out</button>
      </div>
    </div>
  );
}

export default LoggedInNav;
