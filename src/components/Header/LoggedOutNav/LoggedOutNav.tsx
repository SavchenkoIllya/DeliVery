//styles
import styles from "./LoggedOutNav.module.scss";

function LoggedOutNav() {
  function showLogin() {
    document.querySelector(".Login")?.classList.toggle("show");
    document.body.classList.toggle("scrollLock");
  }

  function showSignup() {
    document.querySelector(".Signup")?.classList.toggle("show");
    document.body.classList.toggle("scrollLock");
  }

  return (
    <div>
      <button onClick={() => showLogin()} className={styles.login}>
        Log in
      </button>
      <button onClick={() => showSignup()} className={styles.sign}>
        Sign up
      </button>
    </div>
  );
}

export default LoggedOutNav;
