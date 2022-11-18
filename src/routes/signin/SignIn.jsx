import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log("response", response);
  };
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
    </div>
  );
};

export default SignIn;
