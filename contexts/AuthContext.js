import { createContext, useState, useEffect } from 'react';
import Router from 'next/router';
import firebase from 'src/lib/firebase';
import cookie from 'js-cookie';
const AuthContext = createContext();

const formatUser = async (user) => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  token: user.za,
  provider: user.providerData[0].providerId,
  photoUrl: user.photoURL,
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleUser = async (currentUser) => {
    if (currentUser) {
      console.log(currentUser);
      const formatedUser = await formatUser(currentUser);
      setUser(formatedUser);
      setSession(true);
      return formatedUser.email;
    }
    setUser(false);
    setSession(false);
    return false;
  };

  const setSession = (session) => {
    if (session) {
      cookie.set('gabriel4420-auth', session, {
        expires: 1,
      });
    } else {
      cookie.remove('gabriel4420-auth');
    }
  };

  const signinGitHub = async () => {
    try {
      setLoading(true);
      const response = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GithubAuthProvider());
      handleUser(response.user);
      Router.push('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  const signinGoogle = async () => {
    try {
      setLoading(true);
      const response = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());
      handleUser(response.user);
      Router.push('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  const signout = async () => {
    try {
      Router.push('/');
      await firebase.auth().signOut();
      handleUser(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signinGitHub,
        signinGoogle,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
