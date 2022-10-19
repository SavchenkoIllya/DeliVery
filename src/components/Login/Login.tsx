import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../appContext";
import { auth } from "../../firebase";
//Styles
import styles from "./Login.module.scss";

export const Login: React.FC = () => {
  const { openLogin, setOpenLogin, setOpenSignup } = useContext(AuthContext);
  const [errorData, setError] = useState<{
    isError?: boolean;
    message?: string;
  }>({ isError: false, message: "" });
  const emailRef: any = useRef<string>(null);
  const passwordRef: any = useRef<string>(null);

  function signIn(e: any) {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .catch(function (error) {
        let problem = { isError: true, message: error.message };
        setError((errorData) => ({ ...errorData, ...problem }));
      });
    auth.onAuthStateChanged((user) => {
      if (user) {
        let noProblem = { isError: false };
        setError((errorData) => ({ ...errorData, ...noProblem }));
        clearInputs();
        setOpenLogin!(false);
      }
    });
    function clearInputs() {
      let x: any = document.getElementById("lEmail");
      let y: any = document.getElementById("lPassword");
      x.value = "";
      y.value = "";
    }
  }

  if (!openLogin) return null;
  return (
    <div className={styles.wrapper} onClick={() => setOpenLogin!(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.iconWrapper}>
          <i
            onClick={() => setOpenLogin!(false)}
            className={styles.ggClose}
          ></i>
        </div>
        <p className={styles.heading}>Login</p>
        <form onSubmit={(e) => signIn(e)}>
          <div className={styles.form}>
            <div className={styles.username}>
              <p>Email</p>
              <input
                id="lEmail"
                type="email"
                placeholder="example@example.com"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                ref={emailRef}
                required
              />
            </div>
            <div className={styles.password}>
              <p>Password</p>
              <input
                id="lPassword"
                type="password"
                ref={passwordRef}
                pattern="/[^A-Za-z0-9!@#$%^&*]{8,20}"
                required
              />
            </div>
          </div>
          <div className={styles.buttons}>
            {errorData.isError && (
              <p className={styles.errorMessage}>{errorData.message}</p>
            )}
            <input
              onSubmit={(e) => signIn(e)}
              type="submit"
              value="Submit"
              disabled
            />
            <a
              onClick={() => {
                setOpenLogin!(false);
                setOpenSignup!(true);
              }}
            >
              If you don't have account - Registrate faster!
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
