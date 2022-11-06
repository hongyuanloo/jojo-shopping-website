import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      // console.log("unsub:", unsub);
      if (user) {
        console.log("onAuthStateChanged: ", user.email, user);
      } else {
        console.log("onAuthStateChanged: ", user);
      }
    });
    return () => {
      unsub();
      // console.log("unsub():", unsub());
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
