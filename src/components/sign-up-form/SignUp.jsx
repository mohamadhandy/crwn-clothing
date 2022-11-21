import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import { callSwal } from "../../utils/sweetalert/sweetalert";
import FormInput from "../form-input/FormInput";

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
    <div>
      <h1>Signup with your email and password</h1>
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
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
