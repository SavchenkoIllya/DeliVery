import { useState, useRef, useContext } from "react";
import { AuthContext } from "../../appContext";
//styles
import styles from "./Signup.module.scss";
//auth
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const Signup: React.FC = () => {
  const { openSignup, setOpenLogin, setOpenSignup } = useContext(AuthContext);
  const [errorData, setError] = useState<{
    isError?: boolean;
    message?: string;
  }>({ isError: false, message: "" });
  //Refs
  const emailRef: any = useRef<string>(null);
  const passwordRef: any = useRef<string>(null);
  const userNameRef: any = useRef<string>(null);
  const telRef: any = useRef<string>(null);
  const dateRef: any = useRef<string>(null);

  const auth = getAuth();

  function handleSubmit(e: any) {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    ).catch(function (error) {
      let problem = { isError: true, message: error.message };
      setError((errorData) => ({ ...errorData, ...problem }));
    });
    auth.onAuthStateChanged((user) => {
      if (user) {
        let noProblem = { isError: false };
        setError((errorData) => ({ ...errorData, ...noProblem }));
        clearInputs();
        setOpenSignup!(false);
      }
    });
    function clearInputs() {
      let x: any = document.getElementById("sEmail");
      let y: any = document.getElementById("sPassword");
      let z: any = document.getElementById("sUserName");
      let a: any = document.getElementById("sTel");
      let b: any = document.getElementById("sDate");
      x.value = "";
      y.value = "";
      z.value = "";
      a.value = "";
      b.value = "";
    }
  }
  if (!openSignup) return null;
  return (
    <div className={styles.wrapper} onClick={() => setOpenSignup!(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.iconWrapper}>
          <i
            onClick={() => setOpenSignup!(false)}
            className={styles.ggClose}
          ></i>
        </div>
        <p className={styles.heading}>Sign up</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.form}>
            <div className={styles.email}>
              <p>Email</p>
              <input
                id="sEmail"
                type={"email"}
                placeholder="example@example.com"
                ref={emailRef}
                required
              />
            </div>
            <div className={styles.password}>
              <p>Password</p>
              <input
                id="sPassword"
                type={"password"}
                ref={passwordRef}
                required
              />
            </div>
            <div className={styles.name}>
              <p>Name and Surname</p>
              <input
                id="sUserName"
                type={"text"}
                ref={userNameRef}
                placeholder="John Johnson"
                required
              />
            </div>
            <div className={styles.tel}>
              <p>Telephone</p>
              <input
                id="sTel"
                type={"tel"}
                ref={telRef}
                placeholder="+491234567890"
                required
              />
            </div>
            <div className={styles.date}>
              <p>Birthday date</p>
              <input
                id="sDate"
                type={"date"}
                ref={dateRef}
                placeholder="12.12.2022"
                required
              />
            </div>
          </div>
          {errorData.isError === true ? (
            <p style={{ color: "red" }}>{errorData.message}</p>
          ) : (
            ""
          )}
          <div className={styles.buttons}>
            <button onClick={(e) => handleSubmit(e)}>Sign up</button>
            <a
              onClick={() => {
                setOpenLogin!(true);
                setOpenSignup!(false);
              }}
            >
              If you already have account - just Log in!
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
