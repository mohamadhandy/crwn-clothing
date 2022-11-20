import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import swal from "sweetalert";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      swal({ text: "Password do not match!" });
      return;
    }
    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      if (response) {
        try {
          const { user } = response
          user.displayName = displayName
          const result = await createUserDocumentFromAuth(response.user);
          console.log("result", result)
        } catch (error) {
          console.log("error when creating user", error);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
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
        <label htmlFor="displayName">Display Name</label>
        <input
          required
          id="displayName"
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        <input
          required
          type="email"
          onChange={handleChange}
          value={email}
          name="email"
        />

        <label>Password</label>
        <input
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label>Confirm Password</label>
        <input
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
