import React, { useEffect, useState } from "react";
import { auth } from "./firebase";

const AuthContext = React.createContext(null);

export function AuthProvider({ children }: any) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const [currentUser, setCurrentUser] = useState<any>(null);
  const value: any = {
    currentUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
