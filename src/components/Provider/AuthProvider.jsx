import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const handleLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const manageProfile = (name, photo_url) => {
    // setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo_url,
    });
  };

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      return () => {
        unsubscriber();
      };
    });
  }, []);
  const authInfo = {
    handleRegister,
    handleLogin,
    signInWithGoogle,
    handleLogout,
    user,
    setUser,
    manageProfile,
    loading,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
