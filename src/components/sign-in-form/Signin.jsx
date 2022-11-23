import React, { useState } from "react";
import Button from "../button/Button";
import HeaderSigninSignup from "../header-signin-signup/HeaderSigninSignup";
import FormInput from "../form-input/FormInput";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";
import { callSwal } from "../../utils/sweetalert/sweetalert";

const defaultSigninFields = {
  email: "",
  password: "",
};

const Signin = () => {
  const [signInFields, setSigninFields] = useState(defaultSigninFields);
  const { email, password } = signInFields;
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSigninFields({ ...signInFields, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      if (user.uid) {
        callSwal(
          "Success Signin",
          `Welcome ${email} again to crwn clothing`,
          "success"
        );
      }
    } catch (error) {
      if (error.code) {
        callSwal("Error occurs", `Error ${error.code}`, "error");
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <HeaderSigninSignup
          title={"I already have an account"}
          subTitle={"Sign in with your email and password"}
        />
        <FormInput
          label={"Email"}
          id={"emailSignin"}
          type="email"
          onChange={handleChange}
          name={"email"}
          value={email}
        />
        <FormInput
          label={"Password"}
          id={"passwordSignin"}
          type="password"
          onChange={handleChange}
          name={"password"}
          value={password}
        />
        <Button type="submit">Sign In</Button>
      </form>

      <Button buttonType={"google"} onClick={signInWithGoogle}>
        Sign in with Google
      </Button>
    </div>
  );
};

export default Signin;
