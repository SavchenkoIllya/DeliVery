import React, { useRef, useState } from "react";
import { auth } from "../../firebase";
import styles from "./Login.module.scss";

export default function Login() {
  const [errorData, setError] = useState<{
    isError?: boolean;
    message?: string;
  }>({ isError: false, message: "" });
  const emailRef: any = useRef<any>(null);
  const passwordRef: any = useRef<any>(null);

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
        console.log(user);
        let noProblem = { isError: false };
        setError((errorData) => ({ ...errorData, ...noProblem }));
        clearInputs();
        showLogin();
      }
    });
    function clearInputs() {
      let x: any = document.getElementById("lEmail");
      let y: any = document.getElementById("lPassword");
      x.value = "";
      y.value = "";
    }
  }

  function showLogin() {
    document.querySelector(".Login")?.classList.toggle("show");
    document.body.classList.toggle("scrollLock");
  }

  function logSignNav() {
    document.querySelector(".Login")?.classList.toggle("show");
    document.querySelector(".Signup")?.classList.toggle("show");
  }

  return (
    <div className={styles.wrapper} id="login">
      <div className={styles.modal}>
        <div className={styles.iconWrapper}>
          <i onClick={() => showLogin()} className={styles.ggClose}></i>
        </div>
        <p className={styles.heading}>Log in</p>
        <form onSubmit={(e) => signIn(e)}>
          <div className={styles.form}>
            <div className={styles.username}>
              <p>Email</p>
              <input
                id="lEmail"
                type={"email"}
                placeholder="example@example.com"
                ref={emailRef}
                required
              />
            </div>
            <div className={styles.password}>
              <p>Password</p>
              <input
                id="lPassword"
                type={"password"}
                ref={passwordRef}
                required
              />
            </div>
          </div>
          <div className={styles.buttons}>
            {errorData.isError === true ? (
              <p style={{ color: "red" }}>{errorData.message}</p>
            ) : (
              ""
            )}
            <button onSubmit={(e) => signIn(e)}>Submit</button>
            <a onClick={() => logSignNav()}>
              If you don't have account - Registrate faster!
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
