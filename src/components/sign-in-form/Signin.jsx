import React, { useState, useContext } from "react";
import "./Signin.scss";
import Button from "../button/Button";
import HeaderSigninSignup from "../header-signin-signup/HeaderSigninSignup";
import FormInput from "../form-input/FormInput";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";
import { callSwal } from "../../utils/sweetalert/sweetalert";
import { UserContext } from "../../contexts/UserContext";

const defaultSigninFields = {
  email: "",
  password: "",
};

const Signin = () => {
  const [signInFields, setSigninFields] = useState(defaultSigninFields);
  const { email, password } = signInFields;
  const { setCurrentUser } = useContext(UserContext);
  const resetFields = () => {
    setSigninFields(defaultSigninFields);
  };
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
      setCurrentUser(user);
      resetFields();
    } catch (error) {
      if (error.code) {
        const newError = error.code.replace("auth/", "").replace(/-/g, " ");
        callSwal("Error occurs", `Error ${newError}`, "error");
      }
    }
  };
  return (
    <div className="sign-in-container">
      <HeaderSigninSignup
        title={"I already have an account"}
        subTitle={"Sign in with your email and password"}
      />
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          id={"emailSignin"}
          type="email"
          onChange={handleChange}
          name={"email"}
          required={true}
          value={email}
        />
        <FormInput
          label={"Password"}
          id={"passwordSignin"}
          type="password"
          onChange={handleChange}
          required={true}
          name={"password"}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={"google"}
            type="button"
            onClick={signInWithGoogle}
          >
            Google Signin
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
