import React from "react";
import Button from "../button/Button";
import HeaderSigninSignup from "../header-signin-signup/HeaderSigninSignup";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <HeaderSigninSignup
        title={"I already have an account"}
        subTitle={"Sign in with your email and password"}
      />
      <Button buttonType={"google"} onClick={logGoogleUser}>
        Sign in with google popup
      </Button>
    </div>
  );
};

export default Signin;
