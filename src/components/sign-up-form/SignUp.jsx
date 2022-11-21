import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import { callSwal } from "../../utils/sweetalert/sweetalert";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./Signup.scss"

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      callSwal("Error", `Password do not match`, "error");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      callSwal(
        "Success create user",
        `Welcome ${email} to crwn clothing`,
        "success"
      );
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        callSwal("Error", `Email already in use`, "error");
      }
      console.log("error", error);
    }
    resetFormFields();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // ganti valuenya sesuai dengan inputan user
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign up with your email & password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          id={"displayName"}
          type="text"
          onChange={handleChange}
          name={"displayName"}
          value={displayName}
        />
        <FormInput
          label={"Email"}
          id={"email"}
          type="email"
          onChange={handleChange}
          name={"email"}
          value={email}
        />
        <FormInput
          label={"Password"}
          id={"password"}
          type="password"
          onChange={handleChange}
          name={"password"}
          value={password}
        />
        <FormInput
          label={"Confirm Password"}
          id={"confirmPassword"}
          type="password"
          onChange={handleChange}
          name={"confirmPassword"}
          value={confirmPassword}
        />
        <Button type="submit">Sign up</Button>
        {/* <button type="submit">Sign up</button> */}
      </form>
    </div>
  );
};

export default SignUp;
