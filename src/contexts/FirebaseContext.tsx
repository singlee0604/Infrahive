import React, { createContext, useEffect, useReducer } from 'react';

// third-party
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// action - state management
import { LOGIN, LOGOUT } from 'store/actions';
import accountReducer from 'store/accountReducer';

// project imports
import Loader from 'ui-component/Loader';
import { FIREBASE_API } from 'config';
import { InitialLoginContextProps } from 'types';
import { FirebaseContextType } from 'types/auth';

// firebase initialize
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_API);
}
// import api request
import { Register, Login } from 'actions/auth';
import snackbar from 'utils/snackbar';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'store';
import { rLogin } from 'store/slices/auth';
// const
// const initialState: InitialLoginContextProps = {
//   isLoggedIn: false,
//   isInitialized: false,
//   // accessToken: "",
//   user: null
// };

// ==============================|| FIREBASE CONTEXT & PROVIDER ||============================== //

const FirebaseContext = createContext<FirebaseContextType | null>(null);

export const FirebaseProvider = ({ children }: { children: React.ReactElement }) => {
  // const [state, dispatch] = useReducer(accountReducer, initialState);
  const dispatchF = useDispatch();
  const state = useSelector((state) => state.auth);

  console.log(state);
  const router = useRouter();
  // useEffect(() => {
  // if (user.isLoggedIn) {

  // } else {
  //   dispatch({
  //     type: LOGOUT
  //   });
  // }
  // }
  // firebase.auth().onAuthStateChanged((user) => {
  //   if (user) {
  // dispatch({
  //   type: LOGIN,
  //   payload: {
  //     isLoggedIn: true,
  //     user: {
  //       id: user.uid,
  //       email: user.email!,
  //       name: user.displayName || 'Betty'
  //     }
  //   }
  // });
  // } else {
  // dispatch({
  //   type: LOGOUT
  // });
  //   }
  // })

  // }, [dispatch]);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  //
  const firebaseEmailPasswordSignIn = (email: string, password: string) => firebase.auth().signInWithEmailAndPassword(email, password);

  const firebaseGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth().signInWithPopup(provider);
  };

  const firebaseGithubSignIn = () => {
    const provider = new (firebase.auth() as any)();

    return firebase.auth().signInWithPopup(provider);
  };
  const firebaseRegister = async (email: string, password: string) => firebase.auth().createUserWithEmailAndPassword(email, password);

  const logout = () => firebase.auth().signOut();

  const resetPassword = async (email: string) => {
    await firebase.auth().sendPasswordResetEmail(email);
  };

  const updateProfile = () => {};
  if (state.isInitialized !== undefined && !state.isInitialized) {
    return <Loader />;
  }
  // here ------>
  const apiRegister = async (values: Object) => {
    const data = await Register(values);
    snackbar(data.data);
    router.push('login');
    return data;
  };
  const apiLogin = async (email: String, password: String) => {
    const { data } = await Login(email, password);
    snackbar('You are logged successfully in Our Site.');
    dispatchF(rLogin(data));
    // dispatch({
    //   type: LOGIN,
    //   payload: {
    //     isLoggedIn: true,
    //     user: data.user,
    //     // accessToken: data.accessToken
    //   }
    // });
  };

  // const api = async (email: String, password: String) => {
  //   const { data } = await Login(email, password);
  //   snackbar("You are logged successfully in Our Site.");
  //   dispatchF(rLogin(data));
  //   // dispatch({
  //   //   type: LOGIN,
  //   //   payload: {
  //   //     isLoggedIn: true,
  //   //     user: data.user,
  //   //     // accessToken: data.accessToken
  //   //   }
  //   // });
  // }

  return (
    <FirebaseContext.Provider
      value={{
        ...state,
        firebaseRegister,
        firebaseEmailPasswordSignIn,
        login: () => {},
        firebaseGoogleSignIn,
        logout,
        resetPassword,
        updateProfile,
        apiRegister,
        apiLogin
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContext;
