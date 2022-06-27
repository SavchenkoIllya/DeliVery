import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { Product } from "./Types/types";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export const AuthContext = React.createContext<any>(null);

export function AuthProvider({ children }: any) {
  const [cartItems, setItems] = useState<Product>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openSignup, setOpenSignup] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);
  const db = firebase.firestore().collection("products");
  const [data, setData] = useState<Product>([]);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  useEffect(() => {
    openSignup || openLogin
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [openSignup, openLogin]);
  useEffect(() => {
    db.onSnapshot(async (querySnapshot) => {
      const items: any = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
    });
  }, []);

  const value = {
    data,
    currentUser,
    cartItems,
    openLogin,
    openSignup,
    openCart,
    setItems,
    setOpenLogin,
    setOpenSignup,
    setOpenCart,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
