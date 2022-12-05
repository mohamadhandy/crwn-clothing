import Signin from "../../components/sign-in-form/Signin";
import SignUp from "../../components/sign-up-form/SignUp";
import "./Authentication.scss"

const Authentication = () => {
  return (
    <div className="authentication-container">
      <Signin />
      <SignUp />
    </div>
  );
};

export default Authentication;
